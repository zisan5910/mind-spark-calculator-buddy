import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, RotateCcw, Code, FileText, GitBranch, Edit3, BookOpen, Keyboard as KeyboardIcon } from "lucide-react";
import CodeEditor from "@/components/CodeEditor";
import PreviewPane from "@/components/PreviewPane";
import AlgorithmFlowchart from "@/components/AlgorithmFlowchart";
import ManualAlgorithmFlowchart from "@/components/ManualAlgorithmFlowchart";
import VirtualKeyboard from "@/components/VirtualKeyboard";
import { cheatCodes } from "@/data/cheatCodes";

const Index = () => {
  const [selectedCode, setSelectedCode] = useState('');
  const [currentCode, setCurrentCode] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState('html');
  const [inputMode, setInputMode] = useState<'preset' | 'manual'>('manual');
  const [showKeyboard, setShowKeyboard] = useState(false);

  const handleTopicSelect = (value: string) => {
    const selected = cheatCodes.find(code => code.id === value);
    if (selected) {
      setSelectedCode(value);
      setCurrentCode(selected.code);
      setCurrentLanguage(selected.language);
    }
  };

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    setCurrentCode('');
    setSelectedCode('');
  };

  const handleRun = () => {
    console.log('Running code:', currentCode);
  };

  const handleClear = () => {
    setCurrentCode('');
    setSelectedCode('');
  };

  const handleModeChange = (mode: 'preset' | 'manual') => {
    setInputMode(mode);
    setCurrentCode('');
    setSelectedCode('');
  };

  const getCurrentCodeData = () => {
    return cheatCodes.find(code => code.id === selectedCode);
  };

  const handleKeyboardInput = (input: string) => {
    setCurrentCode(input);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            HSC.code
          </h1>
        </div>

        <Card className="mb-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex gap-2">
                <Button
                  onClick={() => handleModeChange('preset')}
                  variant={inputMode === 'preset' ? 'default' : 'outline'}
                  className="flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  CheatCode
                </Button>
                <Button
                  onClick={() => handleModeChange('manual')}
                  variant={inputMode === 'manual' ? 'default' : 'outline'}
                  className="flex items-center gap-2"
                >
                  <Edit3 className="w-4 h-4" />
                  Write Code
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              {inputMode === 'preset' ? (
                <div className="flex-1 min-w-0">
                  <Select value={selectedCode} onValueChange={handleTopicSelect}>
                    <SelectTrigger className="w-full bg-white border-2 border-gray-200 hover:border-blue-300 transition-colors">
                      <SelectValue placeholder="একটি টপিক নির্বাচন করুন..." />
                    </SelectTrigger>
                    <SelectContent className="max-h-80">
                      <div className="p-2 text-sm font-semibold text-blue-600 border-b">HTML Topics</div>
                      {cheatCodes.filter(code => code.language === 'html').map((code) => (
                        <SelectItem key={code.id} value={code.id} className="cursor-pointer hover:bg-blue-50">
                          <div className="flex items-center gap-2">
                            <Code className="w-4 h-4 text-orange-500" />
                            {code.title}
                          </div>
                        </SelectItem>
                      ))}
                      <div className="p-2 text-sm font-semibold text-purple-600 border-b border-t mt-2">C Programming Topics</div>
                      {cheatCodes.filter(code => code.language === 'c').map((code) => (
                        <SelectItem key={code.id} value={code.id} className="cursor-pointer hover:bg-purple-50">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-blue-500" />
                            {code.title}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ) : (
                <div className="flex-1 min-w-0">
                  <Select value={currentLanguage} onValueChange={handleLanguageChange}>
                    <SelectTrigger className="w-full bg-white border-2 border-gray-200 hover:border-blue-300 transition-colors">
                      <SelectValue placeholder="ভাষা নির্বাচন করুন..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="html" className="cursor-pointer hover:bg-blue-50">
                        <div className="flex items-center gap-2">
                          <Code className="w-4 h-4 text-orange-500" />
                          HTML
                        </div>
                      </SelectItem>
                      <SelectItem value="c" className="cursor-pointer hover:bg-purple-50">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-blue-500" />
                          C Programming
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              
              <div className="flex gap-2">
                <Button 
                  onClick={() => setShowKeyboard(!showKeyboard)} 
                  variant="outline"
                  className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300"
                >
                  <KeyboardIcon className="w-4 h-4 mr-2" />
                  Keyboard
                </Button>
                <Button 
                  onClick={handleRun} 
                  className="bg-green-500 hover:bg-green-600 text-white shadow-md transition-all duration-200 hover:shadow-lg"
                  disabled={!currentCode}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Run
                </Button>
                <Button 
                  onClick={handleClear} 
                  variant="outline" 
                  className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 shadow-md transition-all duration-200"
                  disabled={!currentCode}
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Clear
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {(currentCode || inputMode === 'manual') ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CodeEditor 
                code={currentCode} 
                onChange={setCurrentCode} 
                language={currentLanguage}
              />
              <PreviewPane 
                code={currentCode} 
                language={currentLanguage} 
              />
            </div>

            {showKeyboard && (
              <VirtualKeyboard
                onChange={handleKeyboardInput}
                currentInput={currentCode}
                language={currentLanguage}
              />
            )}

            {currentLanguage === 'c' && (
              <>
                {inputMode === 'preset' ? (
                  <AlgorithmFlowchart data={getCurrentCodeData()} />
                ) : (
                  <ManualAlgorithmFlowchart code={currentCode} />
                )}
              </>
            )}
          </div>
        ) : (
          <Card className="text-center py-16 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardContent>
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  কোড প্রিভিউ শুরু করুন
                </h3>
                <p className="text-gray-600">
                  {inputMode === 'preset' 
                    ? 'উপরের ড্রপডাউন মেনু থেকে একটি টপিক নির্বাচন করুন এবং রিয়েল-টাইম প্রিভিউ দেখুন'
                    : 'একটি প্রোগ্রামিং ভাষা নির্বাচন করুন এবং আপনার কোড লিখতে শুরু করুন'
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Index;