const func = [];

for (var i =0; i < 10; i++){
    
    func.push(function(){
        console.log(i);
    });
}

//os dois resultados darão 10, porque o var não tem escopo de função
func[2]();
func[8]();