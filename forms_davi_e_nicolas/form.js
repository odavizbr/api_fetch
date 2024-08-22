window.onload = function () {
  let cep;
  let bt = document.querySelector("button");
  let dados = document.querySelector("#json");
  bt.addEventListener("click", () => {
    cep = document.querySelector("#cep").value;
    rua = document.querySelector("#rua")
    bairro = document.querySelector("#bairro")
    cidade = document.querySelector("#cidade")
    complemento = document.querySelector("#complemento")
    unidade = document.querySelector("#unidade")
    uf = document.querySelector("#uf")
    ibge = document.querySelector("#ibge")
    gia = document.querySelector("#gia")
    ddd = document.querySelector("#ddd")
    siafi = document.querySelector("#siafi")


    let servidor = `https://viacep.com.br/ws/${cep}/json`;
    console.log(servidor);
    fetch(servidor)
      .then((resp) => {
        return resp.json();
      })
      .then((x) => {

        for (var key in x) {
          console.log(key, x[key])
        }

        // criar elementos (nó)
        let div = document.createElement("div");
        for (var key in x) {

          rua.value = x["logradouro"]
          bairro.value = x["bairro"]
          cidade.value = x["localidade"]
          complemento.value = x["complemento"]
          unidade.value = x["unidade"]
          uf.value = x["uf"]
          ibge.value = x["ibge"]
          gia.value = x["gia"]
          ddd.value = x["ddd"]
          siafi.value = x["siafi"]

        }

        dados.append(div);

        // console.log(key , x[key])
        /*let p = document.createElement("p");
 
        let texto = document.createTextNode(`${key.toUpperCase()} : ${x[key]}`);
        p.appendChild(texto);
        div.appendChild(p);*/
      }
        //console.log(x['bairro'])
      ).catch((x) => console.error(x));
  });
};