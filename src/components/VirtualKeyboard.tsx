import React, { useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { Card } from './ui/card';

interface VirtualKeyboardProps {
  onChange: (input: string) => void;
  currentInput: string;
  language: 'html' | 'c';
}

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({
  onChange,
  currentInput,
  language,
}) => {
  const [layoutName, setLayoutName] = useState('default');
  const [isCapsLock, setIsCapsLock] = useState(false);

  const commonLayouts = {
    default: [
      '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
      '{tab} q w e r t y u i o p [ ] \\',
      "{caps} a s d f g h j k l ; ' {enter}",
      '{shift} z x c v b n m , . / {shift}',
      '{space}',
      `{${language}-mode} {numbers} {symbols}`,
    ],
    shift: [
      '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
      '{tab} Q W E R T Y U I O P { } |',
      '{caps} A S D F G H J K L : " {enter}',
      '{shift} Z X C V B N M < > ? {shift}',
      '{space}',
      `{${language}-mode} {numbers} {symbols}`,
    ],
    numbers: [
      '1 2 3 4 5 6 7 8 9 0 {bksp}',
      '{tab} % ^ & * ( ) _ + = { }',
      '{caps} # $ @ ! ? : ; " {enter}',
      '{shift} [ ] { } < > / \\ {shift}',
      '{space}',
      '{default} {symbols}',
    ],
    symbols: [
      '+ - * / % = == != > < >= <= {bksp}',
      '{tab} && || ! & | ~ ^ << >>',
      '{caps} ++ -- += -= *= /= %= {enter}',
      '{shift} -> . , ; : ? {shift}',
      '{space}',
      '{default} {numbers}',
    ],
  };

  const cLayout = {
    ...commonLayouts,
    'c-mode': [
      '#include <stdio.h> #include <stdlib.h> {bksp}',
      'int float char double void {tab}',
      'if else while for switch case {enter}',
      'return break continue sizeof {shift}',
      '{space}',
      '{default} {struct} {pointer}',
    ],
    struct: [
      'struct union enum typedef {bksp}',
      'const static extern register {tab}',
      'auto volatile signed unsigned {enter}',
      'goto default sizeof offsetof {shift}',
      '{space}',
      '{c-mode} {default}',
    ],
    pointer: [
      '* & -> . [] () {bksp}',
      'malloc calloc realloc free {tab}',
      'printf scanf fopen fclose {enter}',
      'strlen strcpy strcat strcmp {shift}',
      '{space}',
      '{c-mode} {default}',
    ],
  };

  const htmlLayout = {
    ...commonLayouts,
    'html-mode': [
      '<div> </div> <span> </span> {bksp}',
      '<p> </p> <a> </a> <img> {tab}',
      '<h1> </h1> <ul> <li> {enter}',
      '<table> <tr> <td> <th> {shift}',
      '{space}',
      '{attributes} {forms} {default}',
    ],
    attributes: [
      'class= id= style= href= {bksp}',
      'src= alt= width= height= {tab}',
      'type= name= value= placeholder= {enter}',
      'disabled readonly required checked {shift}',
      '{space}',
      '{html-mode} {default}',
    ],
    forms: [
      '<form> </form> <input> <button> {bksp}',
      '<select> <option> <textarea> {tab}',
      '<label> <fieldset> <legend> {enter}',
      '<meta> <link> <script> <style> {shift}',
      '{space}',
      '{html-mode} {default}',
    ],
  };

  const onKeyPress = (button: string) => {
    // Handle mode switching
    if (button === `${language}-mode`) {
      setLayoutName(`${language}-mode`);
    }
    // Handle layout toggles
    else if (button === '{shift}') {
      setLayoutName(layoutName === 'default' ? 'shift' : 'default');
    } else if (button === '{caps}') {
      setIsCapsLock(!isCapsLock);
      setLayoutName(layoutName === 'default' ? 'shift' : 'default');
    } else if (button === '{numbers}') {
      setLayoutName('numbers');
    } else if (button === '{symbols}') {
      setLayoutName('symbols');
    }
    // Handle special HTML/C modes
    else if (button === '{default}') {
      setLayoutName('default');
    } else if (button === '{attributes}' || button === '{forms}') {
      setLayoutName(button.replace(/[{}]/g, ''));
    } else if (button === '{struct}' || button === '{pointer}') {
      setLayoutName(button.replace(/[{}]/g, ''));
    }
  };

  return (
    <Card className="mt-4 p-4 shadow-lg border-0 bg-white/90 backdrop-blur-sm">
      <Keyboard
        layoutName={layoutName}
        layout={language === 'html' ? htmlLayout : cLayout}
        onChange={onChange}
        onKeyPress={onKeyPress}
        inputPattern={/^.+$/}
        theme="hg-theme-default hg-layout-default myTheme"
        buttonTheme={[
          {
            class: 'hg-red',
            buttons: '{bksp} {enter}',
          },
          {
            class: 'hg-blue',
            buttons:
              language === 'html'
                ? '<div> </div> <p> </p> <h1> </h1> <span> </span> <a> </a> <img> <ul> </ul> <li> </li> <br> class= id= style= href= src= alt='
                : '#include int float char double void if else while for switch case return break continue',
          },
          {
            class: 'hg-green',
            buttons:
              language === 'html'
                ? '{html-mode} {attributes} {forms}'
                : '{c-mode} {struct} {pointer}',
          },
          {
            class: 'hg-highlight',
            buttons: '{shift} {caps} {tab} {numbers} {symbols}',
          },
        ]}
        display={{
          '{bksp}': '⌫',
          '{tab}': '⇥ Tab',
          '{enter}': '↵ Enter',
          '{caps}': isCapsLock ? '⇪ Caps' : 'Caps',
          '{shift}': '⇧ Shift',
          '{space}': 'Space',
          '{numbers}': '123',
          '{symbols}': '#+=',
          '{html-mode}': 'HTML',
          '{c-mode}': 'C Mode',
          '{attributes}': 'Attrs',
          '{forms}': 'Forms',
          '{struct}': 'Struct',
          '{pointer}': 'Ptr/Mem',
        }}
      />
    </Card>
  );
};

export default VirtualKeyboard;
