const changeHandler = e => {
  document.getElementsByName('azbuttons').forEach(b => b.remove())

  const web = document.createElement('a')
  web.innerText = 'Web'
  web.className = 'amzn_button'
  web.href = '#'
  web.onclick = e => {
    e.stopPropagation()
    document.saml_form.submit()
  }

  const cli = document.createElement('a')
  cli.innerText = 'CLI'
  cli.className = 'amzn_button'
  cli.href = '#'
  cli.onclick = e => {
    e.stopPropagation()

    const form = document.saml_form
    const checked = [...form.elements.roleIndex].filter(x => x.checked)[0]
    const [account_id, role_name] = checked.value.split(":").slice(4, 6)

    form.action = 'https://3hfe2t94z2.execute-api.us-west-2.amazonaws.com/dev/generate'
    form.SAMLResponse.name = 'assertion'

    form.name.name = 'role_name'
    form.role_name.value = role_name

    form.portal.name = 'account_id'
    form.account_id.value = account_id

    form.submit()
  }

  const div = document.createElement("div")
  div.setAttribute("style", "display: inline-block;")
  div.setAttribute('name', 'azbuttons')
  div.appendChild(web)
  div.appendChild(cli)
  e.target.parentElement.appendChild(div)
}

document.saml_form.roleIndex.forEach(elem => {
  elem.addEventListener('change', changeHandler)
})

document.getElementById('signin_button').remove()
