
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Code, FileText } from "lucide-react";

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
  language: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange, language }) => {
  return (
    <Card className="h-full shadow-lg border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          {language === 'html' ? (
            <Code className="w-5 h-5 text-orange-500" />
          ) : (
            <FileText className="w-5 h-5 text-blue-500" />
          )}
          {language === 'html' ? 'HTML কোড এডিটর' : 'C প্রোগ্রাম এডিটর'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          value={code}
          onChange={(e) => onChange(e.target.value)}
          className="min-h-[400px] font-mono text-sm bg-gray-50 border-2 border-gray-200 focus:border-blue-400 transition-colors resize-none"
          placeholder={language === 'html' ? 'আপনার HTML কোড এখানে লিখুন...' : 'আপনার C প্রোগ্রাম এখানে লিখুন...'}
        />
      </CardContent>
    </Card>
  );
};

export default CodeEditor;
