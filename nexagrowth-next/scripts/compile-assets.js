const fs = require('fs');
const path = require('path');

function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function compileBlogs() {
  const blogDir = path.join(__dirname, '..', 'public', 'blog');
  const outputFilePath = path.join(__dirname, '..', 'src', 'data', 'blogData.json');
  
  if (!fs.existsSync(blogDir)) {
    console.log('No blog directory found at', blogDir);
    return;
  }
  
  const files = fs.readdirSync(blogDir);
  const blogs = {};
  
  files.forEach(file => {
    if (!file.endsWith('.html') || file === 'index.html') return;
    
    const slug = file.replace('.html', '');
    const filePath = path.join(blogDir, file);
    const htmlContent = fs.readFileSync(filePath, 'utf-8');
    
    // Extract Title
    const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : "Blog Article";

    // Extract Meta Description
    const descMatch = htmlContent.match(/<meta\s+name="description"\s+content="(.*?)"/i) || 
                      htmlContent.match(/<meta\s+property="og:description"\s+content="(.*?)"/i);
    const description = descMatch ? descMatch[1] : "Actionable digital marketing, SEO, and paid ad strategies.";

    // Extract Blog Meta (Category, Date, Read Time)
    const catMatch = htmlContent.match(/<span\s+class="blog-cat">(.*?)<\/span>/i);
    const dateMatch = htmlContent.match(/<span\s+class="blog-date">(.*?)<\/span>/i);
    const readMatch = htmlContent.match(/<span\s+class="blog-read">(.*?)<\/span>/i);

    const category = catMatch ? catMatch[1] : "Marketing";
    const date = dateMatch ? dateMatch[1] : "Recent";
    const readTime = readMatch ? readMatch[1] : "5 min read";

    // Extract main Heading <h1>
    const h1Match = htmlContent.match(/<h1>(.*?)<\/h1>/i);
    const headline = h1Match ? h1Match[1] : title;

    // Extract main Content Body within <main class="blog-content">
    const bodyMatch = htmlContent.match(/<main\s+class="blog-content"[^>]*>([\s\S]*?)<\/main>/i);
    let bodyHtml = bodyMatch ? bodyMatch[1] : "";

    // Clean up content
    bodyHtml = bodyHtml.replace(/<nav\s+class="nav"[\s\S]*?<\/nav>/gi, "");
    bodyHtml = bodyHtml.replace(/<footer[\s\S]*?<\/footer>/gi, "");
    bodyHtml = bodyHtml.replace(/src="\.\.\/logo\.png"/gi, 'src="/logo.png"');
    bodyHtml = bodyHtml.replace(/src="logo\.png"/gi, 'src="/logo.png"');
    
    blogs[slug] = {
      title,
      description,
      category,
      date,
      readTime,
      headline,
      bodyHtml
    };
  });
  
  ensureDirectoryExistence(outputFilePath);
  fs.writeFileSync(outputFilePath, JSON.stringify(blogs, null, 2), 'utf-8');
  console.log(`Successfully compiled ${Object.keys(blogs).length} blog posts into ${outputFilePath}`);
}

function compileTools() {
  const toolsDir = path.join(__dirname, '..', 'public', 'tools');
  const outputFilePath = path.join(__dirname, '..', 'src', 'data', 'toolsData.json');
  
  if (!fs.existsSync(toolsDir)) {
    console.log('No tools directory found at', toolsDir);
    return;
  }
  
  const files = fs.readdirSync(toolsDir);
  const tools = {};
  
  files.forEach(file => {
    if (!file.endsWith('.html') || file === 'index.html') return;
    
    const slug = file.replace('.html', '');
    tools[slug] = {
      exists: true
    };
  });
  
  ensureDirectoryExistence(outputFilePath);
  fs.writeFileSync(outputFilePath, JSON.stringify(tools, null, 2), 'utf-8');
  console.log(`Successfully compiled ${Object.keys(tools).length} tools into ${outputFilePath}`);
}

compileBlogs();
compileTools();
