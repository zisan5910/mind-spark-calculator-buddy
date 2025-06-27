
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
    id: 'html-headings-complete',
    title: 'HTML শিরোনাম ট্যাগ (H1-H6)',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <title>সম্পূর্ণ শিরোনাম উদাহরণ</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h1 { color: #2c3e50; }
        h2 { color: #3498db; }
        h3 { color: #e74c3c; }
        h4 { color: #f39c12; }
        h5 { color: #9b59b6; }
        h6 { color: #1abc9c; }
    </style>
</head>
<body>
    <h1>প্রধান শিরোনাম (H1) - সবচেয়ে বড়</h1>
    <h2>দ্বিতীয় স্তরের শিরোনাম (H2)</h2>
    <h3>তৃতীয় স্তরের শিরোনাম (H3)</h3>
    <h4>চতুর্থ স্তরের শিরোনাম (H4)</h4>
    <h5>পঞ্চম স্তরের শিরোনাম (H5)</h5>
    <h6>ষষ্ঠ স্তরের শিরোনাম (H6) - সবচেয়ে ছোট</h6>
    
    <p>শিরোনাম ট্যাগ ব্যবহার করে আপনি পাঠ্যের গুরুত্ব এবং কাঠামো দেখাতে পারেন।</p>
</body>
</html>`
  },
  {
    id: 'html-paragraph-text',
    title: 'প্যারাগ্রাফ ট্যাগ (P)',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <title>প্যারাগ্রাফ উদাহরণ</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
        .highlight { background-color: yellow; }
        .important { color: red; font-weight: bold; }
    </style>
</head>
<body>
    <h1>প্যারাগ্রাফ ট্যাগের ব্যবহার</h1>
    
    <p>এটি একটি সাধারণ প্যারাগ্রাফ। প্যারাগ্রাফ ট্যাগ ব্যবহার করে আমরা লেখাকে আলাদা অংশে ভাগ করি।</p>
    
    <p class="highlight">এই প্যারাগ্রাফটি হাইলাইট করা হয়েছে CSS দিয়ে।</p>
    
    <p>আপনি <span class="important">গুরুত্বপূর্ণ তথ্য</span> এভাবে আলাদা করতে পারেন।</p>
    
    <p>প্রতিটি প্যারাগ্রাফ একটি নতুন লাইনে শুরু হয় এবং এর পরে একটি ফাঁকা জায়গা থাকে।</p>
</body>
</html>`
  },
  {
    id: 'html-lists-complete',
    title: 'তালিকা ট্যাগ (UL, OL, LI)',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <title>সম্পূর্ণ তালিকা উদাহরণ</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        ul { background-color: #f0f8ff; padding: 15px; }
        ol { background-color: #f5f5f5; padding: 15px; }
        li { margin: 5px 0; }
    </style>
</head>
<body>
    <h1>বিভিন্ন ধরনের তালিকা</h1>
    
    <h2>অগোছালো তালিকা (Unordered List - UL):</h2>
    <ul>
        <li>আম</li>
        <li>কাঁঠাল</li>
        <li>লিচু</li>
        <li>আনারস</li>
    </ul>
    
    <h2>গোছানো তালিকা (Ordered List - OL):</h2>
    <ol>
        <li>প্রথমে ভাত রান্না করুন</li>
        <li>তারপর তরকারি রান্না করুন</li>
        <li>পরিবেশন করুন</li>
        <li>খাওয়া শেষে বাসন পরিষ্কার করুন</li>
    </ol>
    
    <h2>নেস্টেড তালিকা (Nested Lists):</h2>
    <ul>
        <li>বাংলাদেশের বিভাগ
            <ol>
                <li>ঢাকা বিভাগ</li>
                <li>চট্টগ্রাম বিভাগ</li>
                <li>সিলেট বিভাগ</li>
            </ol>
        </li>
        <li>প্রিয় খেলা
            <ul>
                <li>ক্রিকেট</li>
                <li>ফুটবল</li>
            </ul>
        </li>
    </ul>
</body>
</html>`
  },
  {
    id: 'html-links-images',
    title: 'লিংক ও ছবি ট্যাগ (A, IMG)',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <title>লিংক ও ছবির উদাহরণ</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        a { color: #3498db; text-decoration: none; }
        a:hover { text-decoration: underline; }
        img { border: 2px solid #ddd; border-radius: 5px; margin: 10px; }
        .link-section { background-color: #f9f9f9; padding: 15px; margin: 10px 0; }
    </style>
</head>
<body>
    <h1>লিংক ও ছবির ব্যবহার</h1>
    
    <div class="link-section">
        <h2>বিভিন্ন ধরনের লিংক (A ট্যাগ):</h2>
        
        <p><a href="https://www.google.com">গুগলে যান</a> - বাইরের ওয়েবসাইটের লিংক</p>
        
        <p><a href="#section1">এই পেজের একটি অংশে যান</a> - একই পেজের লিংক</p>
        
        <p><a href="mailto:someone@example.com">ইমেইল পাঠান</a> - ইমেইল লিংক</p>
        
        <p><a href="tel:+8801234567890">ফোন করুন</a> - ফোন লিংক</p>
        
        <p><a href="https://www.facebook.com" target="_blank">ফেসবুক (নতুন ট্যাবে)</a></p>
    </div>
    
    <h2>ছবির ব্যবহার (IMG ট্যাগ):</h2>
    
    <img src="https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=নমুনা+ছবি+১" 
         alt="নমুনা ছবি ১" width="300" height="200">
    
    <img src="https://via.placeholder.com/250x150/2196F3/FFFFFF?text=ছোট+ছবি" 
         alt="ছোট ছবি" width="250" height="150">
    
    <h3 id="section1">এই অংশে আপনি লিংক দিয়ে এসেছেন!</h3>
    <p>এটি একটি অভ্যন্তরীণ লিংকের উদাহরণ।</p>
    
    <p><a href="#top">উপরে ফিরে যান</a></p>
</body>
</html>`
  },
  {
    id: 'html-table-complete',
    title: 'টেবিল ট্যাগ (TABLE, TR, TH, TD)',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <title>সম্পূর্ণ টেবিল উদাহরণ</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        table { 
            border-collapse: collapse; 
            width: 100%; 
            margin: 20px 0;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        th, td { 
            border: 1px solid #ddd; 
            padding: 12px; 
            text-align: center; 
        }
        th { 
            background-color: #4CAF50; 
            color: white; 
            font-weight: bold;
        }
        tr:nth-child(even) { 
            background-color: #f2f2f2; 
        }
        tr:hover { 
            background-color: #f5f5f5; 
        }
        .grade-a { background-color: #d4edda; }
        .grade-b { background-color: #fff3cd; }
        .grade-c { background-color: #f8d7da; }
    </style>
</head>
<body>
    <h1>টেবিল ট্যাগের ব্যবহার</h1>
    
    <h2>ছাত্রদের ফলাফল</h2>
    <table>
        <tr>
            <th>নাম</th>
            <th>রোল নম্বর</th>
            <th>শ্রেণী</th>
            <th>বাংলা</th>
            <th>ইংরেজি</th>
            <th>গণিত</th>
            <th>মোট নম্বর</th>
            <th>গ্রেড</th>
        </tr>
        <tr class="grade-a">
            <td>রহিম উদ্দিন</td>
            <td>০১</td>
            <td>দশম</td>
            <td>৮৫</td>
            <td>৯০</td>
            <td>৯৫</td>
            <td>২৭০</td>
            <td>A+</td>
        </tr>
        <tr class="grade-a">
            <td>ফাতেমা খাতুন</td>
            <td>০২</td>
            <td>দশম</td>
            <td>৯২</td>
            <td>৮৮</td>
            <td>৯০</td>
            <td>২৭০</td>
            <td>A+</td>
        </tr>
        <tr class="grade-b">
            <td>করিম মিয়া</td>
            <td>০৩</td>
            <td>দশম</td>
            <td>৭৫</td>
            <td>৮০</td>
            <td>৭৮</td>
            <td>২৩৩</td>
            <td>A</td>
        </tr>
        <tr class="grade-b">
            <td>সালমা বেগম</td>
            <td>০৪</td>
            <td>দশম</td>
            <td>৮০</td>
            <td>৭৫</td>
            <td>৮২</td>
            <td>২৩৭</td>
            <td>A</td>
        </tr>
        <tr class="grade-c">
            <td>জামিল হাসান</td>
            <td>০৫</td>
            <td>দশম</td>
            <td>৬৫</td>
            <td>৭০</td>
            <td>৬৮</td>
            <td>২০৩</td>
            <td>B</td>
        </tr>
    </table>
    
    <h2>ক্লাস রুটিন</h2>
    <table>
        <tr>
            <th>সময়</th>
            <th>রবিবার</th>
            <th>সোমবার</th>
            <th>মঙ্গলবার</th>
            <th>বুধবার</th>
            <th>বৃহস্পতিবার</th>
        </tr>
        <tr>
            <td>৯:০০ - ১০:০০</td>
            <td>বাংলা</td>
            <td>ইংরেজি</td>
            <td>গণিত</td>
            <td>বিজ্ঞান</td>
            <td>সমাজ</td>
        </tr>
        <tr>
            <td>১০:০০ - ১১:০০</td>
            <td>গণিত</td>
            <td>বাংলা</td>
            <td>ইংরেজি</td>
            <td>ইতিহাস</td>
            <td>ভূগোল</td>
        </tr>
        <tr>
            <td>১১:০০ - ১২:০০</td>
            <td colspan="5" style="background-color: #ffeb3b;">বিরতি</td>
        </tr>
        <tr>
            <td>১২:০০ - ১:০০</td>
            <td>বিজ্ঞান</td>
            <td>গণিত</td>
            <td>বাংলা</td>
            <td>ইংরেজি</td>
            <td>ধর্মশিক্ষা</td>
        </tr>
    </table>
</body>
</html>`
  },
  {
    id: 'html-form-complete',
    title: 'ফর্ম ট্যাগ (FORM এবং ইনপুট)',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <title>সম্পূর্ণ ফর্ম উদাহরণ</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background-color: #f5f5f5; }
        .form-container { 
            background-color: white; 
            padding: 30px; 
            border-radius: 10px; 
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            max-width: 600px;
            margin: 0 auto;
        }
        h1 { color: #2c3e50; text-align: center; }
        label { 
            display: block; 
            margin: 15px 0 5px 0; 
            font-weight: bold; 
            color: #34495e;
        }
        input, select, textarea { 
            width: 100%; 
            padding: 12px; 
            border: 2px solid #ddd; 
            border-radius: 5px; 
            font-size: 16px;
            box-sizing: border-box;
        }
        input:focus, select:focus, textarea:focus {
            border-color: #3498db;
            outline: none;
        }
        button { 
            background-color: #3498db; 
            color: white; 
            padding: 15px 30px; 
            border: none; 
            border-radius: 5px; 
            cursor: pointer; 
            font-size: 18px;
            margin: 20px 10px 10px 0;
        }
        button:hover { background-color: #2980b9; }
        .reset-btn { background-color: #e74c3c; }
        .reset-btn:hover { background-color: #c0392b; }
        .checkbox-group, .radio-group { 
            margin: 10px 0; 
        }
        .checkbox-group input, .radio-group input { 
            width: auto; 
            margin-right: 10px; 
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h1>ছাত্র ভর্তির ফর্ম</h1>
        
        <form action="#" method="post">
            <label for="name">পূর্ণ নাম:</label>
            <input type="text" id="name" name="name" placeholder="আপনার পূর্ণ নাম লিখুন" required>
            
            <label for="email">ইমেইল ঠিকানা:</label>
            <input type="email" id="email" name="email" placeholder="example@email.com" required>
            
            <label for="phone">মোবাইল নম্বর:</label>
            <input type="tel" id="phone" name="phone" placeholder="০১৭xxxxxxxx" required>
            
            <label for="age">বয়স:</label>
            <input type="number" id="age" name="age" min="5" max="25" placeholder="১৮">
            
            <label for="birthdate">জন্ম তারিখ:</label>
            <input type="date" id="birthdate" name="birthdate">
            
            <label for="password">পাসওয়ার্ড:</label>
            <input type="password" id="password" name="password" placeholder="নিরাপদ পাসওয়ার্ড" required>
            
            <label for="class">শ্রেণী নির্বাচন করুন:</label>
            <select id="class" name="class" required>
                <option value="">শ্রেণী নির্বাচন করুন</option>
                <option value="6">ষষ্ঠ শ্রেণী</option>
                <option value="7">সপ্তম শ্রেণী</option>
                <option value="8">অষ্টম শ্রেণী</option>
                <option value="9">নবম শ্রেণী</option>
                <option value="10">দশম শ্রেণী</option>
            </select>
            
            <label>লিঙ্গ:</label>
            <div class="radio-group">
                <input type="radio" id="male" name="gender" value="male" required>
                <label for="male" style="display: inline;">পুরুষ</label>
                
                <input type="radio" id="female" name="gender" value="female" required>
                <label for="female" style="display: inline;">মহিলা</label>
                
                <input type="radio" id="other" name="gender" value="other" required>
                <label for="other" style="display: inline;">অন্যান্য</label>
            </div>
            
            <label>পছন্দের বিষয় (একাধিক নির্বাচন করতে পারেন):</label>
            <div class="checkbox-group">
                <input type="checkbox" id="bangla" name="subjects" value="bangla">
                <label for="bangla" style="display: inline;">বাংলা</label><br>
                
                <input type="checkbox" id="english" name="subjects" value="english">
                <label for="english" style="display: inline;">ইংরেজি</label><br>
                
                <input type="checkbox" id="math" name="subjects" value="math">
                <label for="math" style="display: inline;">গণিত</label><br>
                
                <input type="checkbox" id="science" name="subjects" value="science">
                <label for="science" style="display: inline;">বিজ্ঞান</label><br>
                
                <input type="checkbox" id="social" name="subjects" value="social">
                <label for="social" style="display: inline;">সামাজিক বিজ্ঞান</label>
            </div>
            
            <label for="address">ঠিকানা:</label>
            <textarea id="address" name="address" rows="4" placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"></textarea>
            
            <label for="photo">ছবি আপলোড করুন:</label>
            <input type="file" id="photo" name="photo" accept="image/*">
            
            <div class="checkbox-group">
                <input type="checkbox" id="terms" name="terms" required>
                <label for="terms" style="display: inline;">আমি সকল নিয়মকানুন মেনে নিচ্ছি</label>
            </div>
            
            <button type="submit">ফর্ম জমা দিন</button>
            <button type="reset" class="reset-btn">সব মুছে ফেলুন</button>
        </form>
    </div>
</body>
</html>`
  },
  {
    id: 'html-all-tags-demo',
    title: 'সব HTML ট্যাগ একসাথে',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>সব HTML ট্যাগের ব্যবহার</title>
    <style>
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            margin: 0; 
            padding: 20px; 
            background: linear-gradient(135deg, #74b9ff, #0984e3);
            color: #2d3436;
        }
        .container { 
            max-width: 1200px; 
            margin: 0 auto; 
            background: white; 
            padding: 30px; 
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        h1 { color: #2d3436; text-align: center; font-size: 2.5em; }
        h2 { color: #0984e3; border-bottom: 2px solid #74b9ff; padding-bottom: 10px; }
        table { border-collapse: collapse; width: 100%; margin: 20px 0; }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: center; }
        th { background-color: #74b9ff; color: white; }
        tr:nth-child(even) { background-color: #f8f9fa; }
        img { border-radius: 10px; margin: 10px; }
        form { background-color: #f1f2f6; padding: 20px; border-radius: 10px; }
        input, select { padding: 10px; margin: 5px; border: 1px solid #ddd; border-radius: 5px; }
        button { background-color: #00b894; color: white; padding: 12px 24px; border: none; border-radius: 5px; cursor: pointer; }
        button:hover { background-color: #00a085; }
        a { color: #0984e3; text-decoration: none; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="container">
        <h1>HTML সব ট্যাগের সম্পূর্ণ উদাহরণ</h1>
        
        <h2>শিরোনাম ট্যাগসমূহ (H1-H6)</h2>
        <h1>H1 - সবচেয়ে বড় শিরোনাম</h1>
        <h2>H2 - দ্বিতীয় স্তরের শিরোনাম</h2>
        <h3>H3 - তৃতীয় স্তরের শিরোনাম</h3>
        <h4>H4 - চতুর্থ স্তরের শিরোনাম</h4>
        <h5>H5 - পঞ্চম স্তরের শিরোনাম</h5>
        <h6>H6 - ষষ্ঠ স্তরের শিরোনাম</h6>
        
        <h2>প্যারাগ্রাফ ট্যাগ (P)</h2>
        <p>এটি একটি প্যারাগ্রাফ ট্যাগের উদাহরণ। প্যারাগ্রাফ ট্যাগ দিয়ে আমরা লেখাকে অনুচ্ছেদে ভাগ করি।</p>
        <p>আরেকটি প্যারাগ্রাফ যা দেখায় কিভাবে টেক্সট আলাদা অংশে বিভক্ত হয়।</p>
        
        <h2>তালিকা ট্যাগসমূহ (UL, OL, LI)</h2>
        <h3>অগোছালো তালিকা (UL):</h3>
        <ul>
            <li>আম</li>
            <li>কাঁঠাল</li>
            <li>লিচু</li>
            <li>কলা</li>
        </ul>
        
        <h3>গোছানো তালিকা (OL):</h3>
        <ol>
            <li>প্রথম কাজ</li>
            <li>দ্বিতীয় কাজ</li>
            <li>তৃতীয় কাজ</li>
            <li>চতুর্থ কাজ</li>
        </ol>
        
        <h2>লিংক ট্যাগ (A)</h2>
        <p>এখানে কিছু লিংকের উদাহরণ:</p>
        <ul>
            <li><a href="https://www.google.com" target="_blank">গুগলে যান</a></li>
            <li><a href="mailto:example@email.com">ইমেইল পাঠান</a></li>
            <li><a href="tel:+8801700000000">ফোন করুন</a></li>
        </ul>
        
        <h2>ছবি ট্যাগ (IMG)</h2>
        <img src="https://via.placeholder.com/300x200/74b9ff/ffffff?text=নমুনা+ছবি+১" 
             alt="নমুনা ছবি ১" width="300" height="200">
        <img src="https://via.placeholder.com/250x150/00b894/ffffff?text=ছবি+২" 
             alt="নমুনা ছবি ২" width="250" height="150">
        
        <h2>টেবিল ট্যাগসমূহ (TABLE, TR, TH, TD)</h2>
        <table>
            <tr>
                <th>নাম</th>
                <th>বয়স</th>
                <th>শহর</th>
                <th>পেশা</th>
            </tr>
            <tr>
                <td>রহিম</td>
                <td>২৫</td>
                <td>ঢাকা</td>
                <td>শিক্ষক</td>
            </tr>
            <tr>
                <td>করিম</td>
                <td>৩০</td>
                <td>চট্টগ্রাম</td>
                <td>ডাক্তার</td>
            </tr>
            <tr>
                <td>ফাতেমা</td>
                <td>২২</td>
                <td>সিলেট</td>
                <td>ইঞ্জিনিয়ার</td>
            </tr>
        </table>
        
        <h2>ফর্ম ট্যাগ (FORM)</h2>
        <form>
            <h3>যোগাযোগের ফর্ম</h3>
            
            <label for="name">নাম:</label><br>
            <input type="text" id="name" name="name" placeholder="আপনার নাম লিখুন"><br><br>
            
            <label for="email">ইমেইল:</label><br>
            <input type="email" id="email" name="email" placeholder="your@email.com"><br><br>
            
            <label for="age">বয়স:</label><br>
            <input type="number" id="age" name="age" min="1" max="100"><br><br>
            
            <label for="city">শহর:</label><br>
            <select id="city" name="city">
                <option value="">শহর নির্বাচন করুন</option>
                <option value="dhaka">ঢাকা</option>
                <option value="chittagong">চট্টগ্রাম</option>
                <option value="sylhet">সিলেট</option>
                <option value="khulna">খুলনা</option>
            </select><br><br>
            
            <label for="message">বার্তা:</label><br>
            <textarea id="message" name="message" rows="4" cols="50" placeholder="আপনার বার্তা লিখুন"></textarea><br><br>
            
            <button type="submit">পাঠান</button>
            <button type="reset">মুছে ফেলুন</button>
        </form>
        
        <h2>সবকিছু একসাথে ব্যবহারের উদাহরণ</h2>
        <p>এই পেজে আমরা দেখেছি কিভাবে সব HTML ট্যাগ একসাথে ব্যবহার করা যায়। 
        <a href="#top">পেজের উপরে ফিরে যেতে ক্লিক করুন</a>।</p>
        
        <ul>
            <li>আমরা শিখেছি <strong>শিরোনাম ট্যাগ (H1-H6)</strong></li>
            <li>দেখেছি <strong>প্যারাগ্রাফ ট্যাগ (P)</strong> এর ব্যবহার</li>
            <li>বুঝেছি <strong>তালিকা ট্যাগ (UL, OL, LI)</strong></li>
            <li>শিখেছি <strong>লিংক ট্যাগ (A)</strong> এবং <strong>ছবি ট্যাগ (IMG)</strong></li>
            <li>অনুশীলন করেছি <strong>টেবিল ট্যাগ (TABLE, TR, TH, TD)</strong></li>
            <li>প্রয়োগ করেছি <strong>ফর্ম ট্যাগ (FORM)</strong></li>
        </ul>
    </div>
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
