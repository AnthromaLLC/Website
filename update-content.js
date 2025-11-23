const fs = require('fs');
const path = require('path');

// 读取文件内容
const termsContent = fs.readFileSync('/Users/jinyili/Downloads/TermsConditions.txt', 'utf8');
const privacyContent = fs.readFileSync('/Users/jinyili/Downloads/PrivacyPolicy.txt', 'utf8');

// 读取App.jsx
const appPath = path.join(__dirname, 'src', 'App.jsx');
let appContent = fs.readFileSync(appPath, 'utf8');

// 转义特殊字符以便在模板字符串中使用
function escapeForTemplateString(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${');
}

// 转义后的内容
const escapedTermsContent = escapeForTemplateString(termsContent);
const escapedPrivacyContent = escapeForTemplateString(privacyContent);

// 更新TermsOfService组件
// 找到termsOfServiceHTML常量的开始和结束位置
const termsStartMarker = 'const termsOfServiceHTML = `';
const termsEndMarker = '  `;';

const termsStartIndex = appContent.indexOf(termsStartMarker);
if (termsStartIndex === -1) {
  console.error('找不到termsOfServiceHTML常量');
  process.exit(1);
}

// 找到结束位置（在return语句之前）
const termsComponentStart = appContent.indexOf('const TermsOfService = () => {', termsStartIndex);
const termsReturnIndex = appContent.indexOf('return (', termsComponentStart);
const termsEndIndex = appContent.lastIndexOf('`;', termsReturnIndex);

if (termsEndIndex === -1 || termsEndIndex < termsStartIndex) {
  console.error('找不到termsOfServiceHTML的结束位置');
  process.exit(1);
}

// 替换Terms内容
const beforeTerms = appContent.substring(0, termsStartIndex + termsStartMarker.length);
const afterTerms = appContent.substring(termsEndIndex);
appContent = beforeTerms + '\n    ' + escapedTermsContent + '\n  ' + afterTerms;

// 更新PrivacyPolicy组件
const privacyStartMarker = 'const privacyPolicyHTML = `';
const privacyStartIndex = appContent.indexOf(privacyStartMarker);
if (privacyStartIndex === -1) {
  console.error('找不到privacyPolicyHTML常量');
  process.exit(1);
}

// 找到结束位置
const privacyComponentStart = appContent.indexOf('const PrivacyPolicy = () => {', privacyStartIndex);
const privacyReturnIndex = appContent.indexOf('return (', privacyComponentStart);
const privacyEndIndex = appContent.lastIndexOf('`;', privacyReturnIndex);

if (privacyEndIndex === -1 || privacyEndIndex < privacyStartIndex) {
  console.error('找不到privacyPolicyHTML的结束位置');
  process.exit(1);
}

// 替换Privacy内容
const beforePrivacy = appContent.substring(0, privacyStartIndex + privacyStartMarker.length);
const afterPrivacy = appContent.substring(privacyEndIndex);
appContent = beforePrivacy + '\n    ' + escapedPrivacyContent + '\n  ' + afterPrivacy;

// 写回文件
fs.writeFileSync(appPath, appContent, 'utf8');
console.log('成功更新App.jsx文件！');

