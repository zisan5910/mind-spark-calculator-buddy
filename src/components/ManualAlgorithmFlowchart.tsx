
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GitBranch, List, Code } from "lucide-react";

interface ManualAlgorithmFlowchartProps {
  code: string;
}

const ManualAlgorithmFlowchart: React.FC<ManualAlgorithmFlowchartProps> = ({ code }) => {
  const generateAlgorithm = (code: string) => {
    if (!code.trim()) return [];
    
    const algorithm = ['শুরু'];
    
    // Variable declarations
    const varMatches = code.match(/(?:int|float|char|double)\s+\w+\s*[=;]/g);
    if (varMatches) {
      algorithm.push('প্রয়োজনীয় ভেরিয়েবল ডিক্লেয়ার করুন');
    }
    
    // Input operations
    const scanfMatches = code.match(/scanf\s*\(/g);
    if (scanfMatches) {
      algorithm.push('ব্যবহারকারীর কাছ থেকে ইনপুট নিন');
    }
    
    // Calculations/Operations
    const calcMatches = code.match(/[+\-*/=]/g);
    if (calcMatches && calcMatches.length > 2) {
      algorithm.push('প্রয়োজনীয় গণনা সম্পাদন করুন');
    }
    
    // Conditional statements
    const ifMatches = code.match(/if\s*\(/g);
    if (ifMatches) {
      algorithm.push('শর্ত পরীক্ষা করুন');
    }
    
    // Loops
    const loopMatches = code.match(/(?:for|while)\s*\(/g);
    if (loopMatches) {
      algorithm.push('লুপ সম্পাদন করুন');
    }
    
    // Output operations
    const printfMatches = code.match(/printf\s*\(/g);
    if (printfMatches) {
      algorithm.push('ফলাফল আউটপুট করুন');
    }
    
    algorithm.push('শেষ');
    return algorithm;
  };

  const generateFlowchart = (code: string) => {
    if (!code.trim()) return [];
    
    const flowchart = [{ type: 'start', text: 'শুরু' }];
    
    // Variable declarations
    const varMatches = code.match(/(?:int|float|char|double)\s+\w+\s*[=;]/g);
    if (varMatches) {
      flowchart.push({ type: 'process', text: 'ভেরিয়েবল ডিক্লেয়ার' });
    }
    
    // Input operations
    const scanfMatches = code.match(/scanf\s*\(/g);
    if (scanfMatches) {
      flowchart.push({ type: 'input', text: 'ইনপুট নিন' });
    }
    
    // Calculations
    const calcMatches = code.match(/[+\-*/=]/g);
    if (calcMatches && calcMatches.length > 2) {
      flowchart.push({ type: 'process', text: 'গণনা করুন' });
    }
    
    // Conditional statements
    const ifMatches = code.match(/if\s*\(/g);
    if (ifMatches) {
      flowchart.push({ type: 'decision', text: 'শর্ত?' });
    }
    
    // Output operations
    const printfMatches = code.match(/printf\s*\(/g);
    if (printfMatches) {
      flowchart.push({ type: 'output', text: 'আউটপুট' });
    }
    
    flowchart.push({ type: 'end', text: 'শেষ' });
    return flowchart;
  };

  if (!code.trim()) {
    return (
      <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
        <CardContent className="text-center py-8">
          <Code className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">C কোড লিখুন অ্যালগরিদম ও ফ্লোচার্ট দেখার জন্য</p>
        </CardContent>
      </Card>
    );
  }

  const algorithm = generateAlgorithm(code);
  const flowchart = generateFlowchart(code);

  return (
    <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <GitBranch className="w-6 h-6 text-purple-500" />
          অ্যালগরিদম ও ফ্লোচার্ট (স্বয়ংক্রিয় তৈরি)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="algorithm" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="algorithm" className="flex items-center gap-2">
              <List className="w-4 h-4" />
              অ্যালগরিদম
            </TabsTrigger>
            <TabsTrigger value="flowchart" className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" />
              ফ্লোচার্ট
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="algorithm">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">স্বয়ংক্রিয় অ্যালগরিদম:</h3>
              <div className="space-y-2">
                {algorithm.map((step: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-800">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="flowchart">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">স্বয়ংক্রিয় ফ্লোচার্ট:</h3>
              <div className="flex flex-col items-center space-y-4">
                {flowchart.map((item: any, index: number) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`
                      px-4 py-2 rounded-lg text-sm font-medium border-2 max-w-xs text-center
                      ${item.type === 'start' || item.type === 'end' 
                        ? 'bg-green-100 border-green-300 text-green-800 rounded-full' 
                        : item.type === 'process' 
                        ? 'bg-blue-100 border-blue-300 text-blue-800' 
                        : item.type === 'decision'
                        ? 'bg-yellow-100 border-yellow-300 text-yellow-800 transform rotate-45'
                        : item.type === 'input'
                        ? 'bg-orange-100 border-orange-300 text-orange-800'
                        : item.type === 'output'
                        ? 'bg-purple-100 border-purple-300 text-purple-800'
                        : 'bg-gray-100 border-gray-300 text-gray-800'
                      }
                    `}>
                      <span className={item.type === 'decision' ? 'transform -rotate-45 block' : ''}>
                        {item.text}
                      </span>
                    </div>
                    {index < flowchart.length - 1 && (
                      <div className="w-0.5 h-6 bg-gray-400"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ManualAlgorithmFlowchart;
