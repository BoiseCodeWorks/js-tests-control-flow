// @ts-nocheck
mocha.setup({
  ui: 'bdd',
  reporter: 'html',
  ignoreLeaks: true
});


function setBreadcrumb(){
  let elem = document.querySelector("#breadcrumb")
  let crumb = new URLSearchParams(location.search).get('grep')
  if(crumb){
    crumb = crumb.replace(/\\/ig, '')
    elem.textContent = '- ' + crumb
  }
}

setBreadcrumb()