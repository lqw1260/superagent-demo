// 零依赖的验收脚本：worker 交付前必须跑它，讲"诚实验证"时正好用。
import { readFileSync } from 'node:fs'

const read = name => readFileSync(new URL(name, import.meta.url), 'utf8')
const css = read('./styles.css')
const html = read('./index.html')
const fails = []

if (!/--title-size:\s*[\d.]+rem/.test(css)) fails.push('styles.css 必须用 rem 定义 --title-size')
if (!/font-size:\s*var\(--title-size\)/.test(css)) fails.push('.title 必须使用 var(--title-size)')
if (!/href="styles\.css"/.test(html)) fails.push('index.html 必须链接 styles.css')
if (/:root\s*\{/.test(css) === false) fails.push('styles.css 必须从 :root 开始定义变量')

if (fails.length) {
  console.error('check failed:\n - ' + fails.join('\n - '))
  process.exit(1)
}
console.log('check passed')
