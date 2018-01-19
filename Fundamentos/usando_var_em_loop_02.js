const func = [];

for (var i =0; i < 10; i++){
    
    func.push(function(){
        console.log(i);
    });
}

//os dois resultados darão 10, porque o var não tem escopo de função
//ele assume o valor do i quando ele sai do bloco, o último valor
func[2]();
func[8]();