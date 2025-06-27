
export const cheatCodes = [
  // HTML Topics
  {
    id: 'html-basic-structure',
    title: 'HTML বেসিক স্ট্রাকচার',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>আমার প্রথম ওয়েবপেজ</title>
</head>
<body>
    <h1>স্বাগতম!</h1>
    <p>এটি একটি সাধারণ HTML পেজ।</p>
</body>
</html>`
  },
  {
    id: 'html-headings',
    title: 'HTML হেডিং ট্যাগ',
    language: 'html',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>হেডিং উদাহরণ</title>
</head>
<body>
    <h1>প্রধান শিরোনাম (H1)</h1>
    <h2>উপ-শিরোনাম (H2)</h2>
    <h3>তৃতীয় স্তরের শিরোনাম (H3)</h3>
    <h4>চতুর্থ স্তরের শিরোনাম (H4)</h4>
    <h5>পঞ্চম স্তরের শিরোনাম (H5)</h5>
    <h6>ষষ্ঠ স্তরের শিরোনাম (H6)</h6>
</body>
</html>`
  },
  {
    id: 'html-paragraph-formatting',
    title: 'প্যারাগ্রাফ ও ফরম্যাটিং',
    language: 'html',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>টেক্সট ফরম্যাটিং</title>
</head>
<body>
    <h1>টেক্সট ফরম্যাটিং উদাহরণ</h1>
    
    <p>এটি একটি সাধারণ প্যারাগ্রাফ।</p>
    
    <p><b>এটি বোল্ড টেক্সট</b></p>
    <p><i>এটি ইটালিক টেক্সট</i></p>
    <p><u>এটি আন্ডারলাইন টেক্সট</u></p>
    <p><strong>এটি গুরুত্বপূর্ণ টেক্সট</strong></p>
    <p><em>এটি জোর দেওয়া টেক্সট</em></p>
    
    <br>
    <hr>
    
    <p>উপরে একটি লাইন ব্রেক এবং হরাইজন্টাল রুল আছে।</p>
</body>
</html>`
  },
  {
    id: 'html-lists',
    title: 'HTML তালিকা',
    language: 'html',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>তালিকা উদাহরণ</title>
</head>
<body>
    <h1>বিভিন্ন ধরনের তালিকা</h1>
    
    <h2>ক্রমযুক্ত তালিকা (Ordered List):</h2>
    <ol>
        <li>প্রথম আইটেম</li>
        <li>দ্বিতীয় আইটেম</li>
        <li>তৃতীয় আইটেম</li>
    </ol>
    
    <h2>ক্রমহীন তালিকা (Unordered List):</h2>
    <ul>
        <li>বুলেট পয়েন্ট ১</li>
        <li>বুলেট পয়েন্ট ২</li>
        <li>বুলেট পয়েন্ট ৩</li>
    </ul>
    
    <h2>সংজ্ঞা তালিকা (Definition List):</h2>
    <dl>
        <dt>HTML</dt>
        <dd>HyperText Markup Language</dd>
        <dt>CSS</dt>
        <dd>Cascading Style Sheets</dd>
    </dl>
</body>
</html>`
  },
  {
    id: 'html-table',
    title: 'HTML টেবিল',
    language: 'html',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>টেবিল উদাহরণ</title>
    <style>
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: center; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h1>ছাত্রদের তথ্য</h1>
    
    <table>
        <tr>
            <th>নাম</th>
            <th>রোল</th>
            <th>শ্রেণী</th>
            <th>নম্বর</th>
        </tr>
        <tr>
            <td>রহিম</td>
            <td>০১</td>
            <td>দশম</td>
            <td>৮৫</td>
        </tr>
        <tr>
            <td>করিম</td>
            <td>০২</td>
            <td>দশম</td>
            <td>৯০</td>
        </tr>
        <tr>
            <td>সালমা</td>
            <td>০৩</td>
            <td>দশম</td>
            <td>৯৫</td>
        </tr>
    </table>
</body>
</html>`
  },
  
  // C Programming Topics
  {
    id: 'c-hello-world',
    title: 'C প্রোগ্রাম - Hello World',
    language: 'c',
    code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    printf("আমার প্রথম C প্রোগ্রাম\\n");
    return 0;
}`,
    algorithm: [
      'প্রোগ্রাম শুরু করুন',
      'stdio.h হেডার ফাইল ইনক্লুড করুন',
      'main() ফাংশন ডিফাইন করুন',
      'printf() ফাংশন ব্যবহার করে "Hello, World!" প্রিন্ট করুন',
      'return 0 দিয়ে প্রোগ্রাম শেষ করুন'
    ],
    flowchart: [
      { type: 'start', text: 'শুরু' },
      { type: 'process', text: 'stdio.h ইনক্লুড' },
      { type: 'process', text: 'main() ফাংশন শুরু' },
      { type: 'process', text: '"Hello, World!" প্রিন্ট করুন' },
      { type: 'process', text: 'return 0' },
      { type: 'end', text: 'শেষ' }
    ]
  },
  {
    id: 'c-variables',
    title: 'C প্রোগ্রাম - ভেরিয়েবল',
    language: 'c',
    code: `#include <stdio.h>

int main() {
    int age = 18;
    float height = 5.8;
    char grade = 'A';
    
    printf("বয়স: %d বছর\\n", age);
    printf("উচ্চতা: %.1f ফুট\\n", height);
    printf("গ্রেড: %c\\n", grade);
    
    return 0;
}`,
    algorithm: [
      'প্রোগ্রাম শুরু করুন',
      'int টাইপের age ভেরিয়েবল ডিক্লেয়ার করুন এবং ১৮ দিয়ে ইনিশিয়ালাইজ করুন',
      'float টাইপের height ভেরিয়েবল ডিক্লেয়ার করুন এবং ৫.৮ দিয়ে ইনিশিয়ালাইজ করুন',
      'char টাইপের grade ভেরিয়েবল ডিক্লেয়ার করুন এবং \'A\' দিয়ে ইনিশিয়ালাইজ করুন',
      'সব ভেরিয়েবলের মান প্রিন্ট করুন',
      'প্রোগ্রাম শেষ করুন'
    ],
    flowchart: [
      { type: 'start', text: 'শুরু' },
      { type: 'process', text: 'age = 18' },
      { type: 'process', text: 'height = 5.8' },
      { type: 'process', text: 'grade = A' },
      { type: 'process', text: 'সব মান প্রিন্ট করুন' },
      { type: 'end', text: 'শেষ' }
    ]
  },
  {
    id: 'c-input-output',
    title: 'C প্রোগ্রাম - ইনপুট আউটপুট',
    language: 'c',
    code: `#include <stdio.h>

int main() {
    int num1, num2, sum;
    
    printf("প্রথম সংখ্যা লিখুন: ");
    scanf("%d", &num1);
    
    printf("দ্বিতীয় সংখ্যা লিখুন: ");
    scanf("%d", &num2);
    
    sum = num1 + num2;
    
    printf("যোগফল = %d\\n", sum);
    
    return 0;
}`,
    algorithm: [
      'প্রোগ্রাম শুরু করুন',
      'তিনটি integer ভেরিয়েবল ডিক্লেয়ার করুন: num1, num2, sum',
      'ব্যবহারকারীকে প্রথম সংখ্যা চাইতে বলুন',
      'scanf() দিয়ে প্রথম সংখ্যা ইনপুট নিন',
      'ব্যবহারকারীকে দ্বিতীয় সংখ্যা চাইতে বলুন',
      'scanf() দিয়ে দ্বিতীয় সংখ্যা ইনপুট নিন',
      'দুটি সংখ্যা যোগ করে sum-এ সংরক্ষণ করুন',
      'যোগফল প্রিন্ট করুন',
      'প্রোগ্রাম শেষ করুন'
    ],
    flowchart: [
      { type: 'start', text: 'শুরু' },
      { type: 'process', text: 'num1, num2, sum ডিক্লেয়ার' },
      { type: 'process', text: 'প্রথম সংখ্যার জন্য প্রম্পট' },
      { type: 'process', text: 'num1 ইনপুট নিন' },
      { type: 'process', text: 'দ্বিতীয় সংখ্যার জন্য প্রম্পট' },
      { type: 'process', text: 'num2 ইনপুট নিন' },
      { type: 'process', text: 'sum = num1 + num2' },
      { type: 'process', text: 'যোগফল প্রিন্ট করুন' },
      { type: 'end', text: 'শেষ' }
    ]
  },
  {
    id: 'c-if-else',
    title: 'C প্রোগ্রাম - If-Else কন্ডিশন',
    language: 'c',
    code: `#include <stdio.h>

int main() {
    int marks;
    
    printf("আপনার নম্বর লিখুন: ");
    scanf("%d", &marks);
    
    if (marks >= 80) {
        printf("গ্রেড: A+\\n");
    }
    else if (marks >= 70) {
        printf("গ্রেড: A\\n");
    }
    else if (marks >= 60) {
        printf("গ্রেড: A-\\n");
    }
    else if (marks >= 50) {
        printf("গ্রেড: B\\n");
    }
    else {
        printf("গ্রেড: F (ফেইল)\\n");
    }
    
    return 0;
}`,
    algorithm: [
      'প্রোগ্রাম শুরু করুন',
      'marks নামক integer ভেরিয়েবল ডিক্লেয়ার করুন',
      'ব্যবহারকারীকে নম্বর লিখতে বলুন',
      'নম্বর ইনপুট নিন',
      'যদি নম্বর ৮০ বা বেশি হয় তাহলে A+ প্রিন্ট করুন',
      'অন্যথায় যদি ৭০ বা বেশি হয় তাহলে A প্রিন্ট করুন',
      'অন্যথায় যদি ৬০ বা বেশি হয় তাহলে A- প্রিন্ট করুন',
      'অন্যথায় যদি ৫০ বা বেশি হয় তাহলে B প্রিন্ট করুন',
      'অন্যথায় F প্রিন্ট করুন',
      'প্রোগ্রাম শেষ করুন'
    ],
    flowchart: [
      { type: 'start', text: 'শুরু' },
      { type: 'process', text: 'marks ডিক্লেয়ার' },
      { type: 'process', text: 'নম্বর ইনপুট নিন' },
      { type: 'decision', text: 'marks >= 80?' },
      { type: 'process', text: 'গ্রেড অনুযায়ী প্রিন্ট' },
      { type: 'end', text: 'শেষ' }
    ]
  },
  {
    id: 'c-for-loop',
    title: 'C প্রোগ্রাম - For Loop',
    language: 'c',
    code: `#include <stdio.h>

int main() {
    int i, n, sum = 0;
    
    printf("কতটি সংখ্যার যোগ করবেন? ");
    scanf("%d", &n);
    
    printf("প্রথম %d টি প্রাকৃতিক সংখ্যার যোগফল:\\n", n);
    
    for (i = 1; i <= n; i++) {
        sum = sum + i;
        printf("%d ", i);
    }
    
    printf("\\nযোগফল = %d\\n", sum);
    
    return 0;
}`,
    algorithm: [
      'প্রোগ্রাম শুরু করুন',
      'i, n, sum ভেরিয়েবল ডিক্লেয়ার করুন (sum = 0)',
      'ব্যবহারকারীকে n এর মান ইনপুট নিতে বলুন',
      'for লুপ শুরু করুন: i = 1 থেকে n পর্যন্ত',
      'প্রতিটি i এর জন্য sum এ i যোগ করুন',
      'i এর মান প্রিন্ট করুন',
      'লুপ শেষ হলে মোট যোগফল প্রিন্ট করুন',
      'প্রোগ্রাম শেষ করুন'
    ],
    flowchart: [
      { type: 'start', text: 'শুরু' },
      { type: 'process', text: 'i, n, sum=0 ডিক্লেয়ার' },
      { type: 'process', text: 'n ইনপুট নিন' },
      { type: 'process', text: 'i = 1' },
      { type: 'decision', text: 'i <= n?' },
      { type: 'process', text: 'sum = sum + i' },
      { type: 'process', text: 'i প্রিন্ট করুন' },
      { type: 'process', text: 'i++' },
      { type: 'process', text: 'যোগফল প্রিন্ট করুন' },
      { type: 'end', text: 'শেষ' }
    ]
  }
];
