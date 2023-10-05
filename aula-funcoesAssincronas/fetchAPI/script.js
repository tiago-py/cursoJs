function obterDadosUsuario(nomeusuario){
    const url = `https://github.com/users/${nomeusuario}`

    return fetch(url)
        .then((response)=>{
            if(response.ok){
                return response.json()
            }else{
                throw new Error('Erro ao obter dados do usuario')
            }
        })
        .then((data)=>{
            return data
        })
        .catch((error)=>{
            console.log(`Erro: ${error}`)
        })

}

obterDadosUsuario('tiago-py')
    .then((usuario)=>{
        exibirDadosUsuario(usuario)
    })

function exibirDadosUsuario(usuario){
    const tableBody = document.querySelector('#dados-table table')

    const row = document.createElement('tr')
    const nomeCell = document.createElement('td')
    const reposCell = document.createElement('td')
    const seguidorCell = document.createElement('td')

    nomeCell.textContent = usuario.name
    reposCell.textContent = usuario.public_repos
    seguidorCell.textContent = usuario.followers

    row.append(nomeCell)
    row.append(reposCell)
    row.append(seguidorCell)

    tableBody.appendChild(row)
}

