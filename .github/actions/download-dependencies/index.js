const fs = require('fs');
const core = require('@actions/core');

async function run() {
  try {
    const dependencyFile = core.getInput('dependency_file');
    
    if (fs.existsSync(dependencyFile)) {
      console.log(`Reading dependencies from ${dependencyFile}...`);
      const dependencies = fs.readFileSync(dependencyFile, 'utf8');
      console.log("Dependencies to download:", dependencies);
      
      // Aqui você pode adicionar lógica para fazer o download das dependências
      console.log("Downloading dependencies...");
    } else {
      console.log(`Dependency file ${dependencyFile} does not exist.`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
