
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Terminal } from "lucide-react";

interface PreviewPaneProps {
  code: string;
  language: string;
}

const PreviewPane: React.FC<PreviewPaneProps> = ({ code, language }) => {
  const simulateCOutput = (code: string) => {
    const outputs = [];
    
    // Simple printf extraction
    const printfMatches = code.match(/printf\s*\(\s*"([^"]*)"[^)]*\)/g);
    if (printfMatches) {
      printfMatches.forEach((match, index) => {
        const stringMatch = match.match(/"([^"]*)"/);
        if (stringMatch) {
          let output = stringMatch[1];
          // Replace common format specifiers with sample values
          output = output.replace(/%d/g, '25');
          output = output.replace(/%f/g, '3.14');
          output = output.replace(/%.1f/g, '5.8');
          output = output.replace(/%c/g, 'A');
          output = output.replace(/%s/g, 'Sample');
          output = output.replace(/\\n/g, '');
          outputs.push(output);
        }
      });
    }
    
    return outputs;
  };

  return (
    <Card className="h-full shadow-lg border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          {language === 'html' ? (
            <Monitor className="w-5 h-5 text-green-500" />
          ) : (
            <Terminal className="w-5 h-5 text-purple-500" />
          )}
          {language === 'html' ? 'লাইভ প্রিভিউ' : 'প্রোগ্রাম আউটপুট'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {language === 'html' ? (
          <div className="border-2 border-gray-200 rounded-lg bg-white min-h-[400px]">
            <iframe
              srcDoc={code}
              className="w-full h-[400px] border-none rounded-lg"
              title="HTML Preview"
            />
          </div>
        ) : (
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg min-h-[400px] font-mono text-sm border-2 border-gray-200">
            <div className="text-gray-400 mb-2">// C প্রোগ্রামের আউটপুট সিমুলেশন</div>
            {code ? (
              <>
                <div className="text-yellow-400 mb-2">কম্পাইল সফল হয়েছে...</div>
                <div className="text-green-400 mb-4">প্রোগ্রাম চালানো হচ্ছে...</div>
                <div className="border-t border-gray-700 pt-4">
                  <div className="text-cyan-400 mb-2">আউটপুট:</div>
                  {simulateCOutput(code).map((output, index) => (
                    <div key={index} className="text-white bg-gray-800 p-2 rounded mb-1 border-l-4 border-blue-400">
                      {output}
                    </div>
                  ))}
                  {!code.includes('printf') && (
                    <div className="text-gray-400 italic">কোন আউটপুট নেই (printf স্টেটমেন্ট খুঁজে পাওয়া যায়নি)</div>
                  )}
                </div>
              </>
            ) : (
              <div className="text-gray-400 italic">কোড লিখুন প্রিভিউ দেখার জন্য...</div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PreviewPane;
