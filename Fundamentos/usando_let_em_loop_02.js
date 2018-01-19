const func = [];

for (let i =0; i < 10; i++){
    
    func.push(function(){
        console.log(i);
    });
}

//funciona, mas ele carrega o valor real da variável
//se fosse var daria 10 o resultado, pq ele pegaria o último valor carregado
func[2](); //2
func[8](); //8