function degrau(){
    //peso das sinapses
    var w1 = w2 = 1.0

    //valores sequenciais das entradas
    var x1 = [0, 0, 1, 1]
    var x2 = [0, 1, 0, 1]

    var funcao_ativacao;
    var limiar = 1.5;
    var limiarOr = 0;
    var limiarXor = 1;
    var limiarNand = 1;
    var limiarNor = 0;
    var y1;

    //saída do neurônio
    var y;

    function funcao_and(){
        console.log("FUNCAO DE ATIVACAO")
        console.log("TESTE DA FUNCAO BOOLEANA E (AND)")

        for (var i = 0; i < x1.length; i++){
            y1 = calcula_ativacao(x1[i], x2[i], w1, w2)

            if (y1 > limiar)
                y = 1
            else
                y = 0

            console.log("x1 = " + x1[i] + " AND x2 = " + x2[i] + "   = " + y)
        }
    }

    function calcula_ativacao(x1, x2, peso1, peso2){
        funcao_ativacao = (x1*peso1) + (x2*peso2);
        return funcao_ativacao;
    }

    function funcao_or(){
        console.log("FUNCAO DE ATIVACAO")
        console.log("TESTE DA FUNCAO BOOLEANA E (OR)")

        for (var i = 0; i < x1.length; i++){
            y1 = calcula_ativacao(x1[i], x2[i], w1, w2)

            if (y1 > limiarOr)
                y = 1
            else
                y = 0

            console.log("x1 = " + x1[i] + " OR x2 = " + x2[i] + "   = " + y)
        }
    }

    function funcao_xor(){
        console.log("FUNCAO DE ATIVACAO")
        console.log("TESTE DA FUNCAO BOOLEANA E (XOR)")

        for (var i = 0; i < x1.length; i++){
            y1 = calcula_ativacao(x1[i], x2[i], w1, w2)

            if (y1 == limiarXor)
                y = 1
            else
                y = 0

            console.log("x1 = " + x1[i] + " XOR x2 = " + x2[i] + "   = " + y)
        }
    }

    function funcao_nand(){
        console.log("FUNCAO DE ATIVACAO")
        console.log("TESTE DA FUNCAO BOOLEANA E (NAND)")

        for (var i = 0; i < x1.length; i++){
            y1 = calcula_ativacao(x1[i], x2[i], w1, w2)

            if (y1 <= limiarNand)
                y = 1
            else
                y = 0

            console.log("x1 = " + x1[i] + " NAND x2 = " + x2[i] + "   = " + y)
        }
    }

    function funcao_nor(){
        console.log("FUNCAO DE ATIVACAO")
        console.log("TESTE DA FUNCAO BOOLEANA E (NOR)")

        for (var i = 0; i < x1.length; i++){
            y1 = calcula_ativacao(x1[i], x2[i], w1, w2)

            if (y1 == limiarNor)
                y = 1
            else
                y = 0

            console.log("x1 = " + x1[i] + " NOR x2 = " + x2[i] + "   = " + y)
        }
    }

    return {
        funcao_and: funcao_and,
        funcao_or: funcao_or,
        funcao_xor: funcao_xor,
        funcao_nand: funcao_nand,
        funcao_nor: funcao_nor
    }

}

var e = new degrau();
e.funcao_and();
e.funcao_or();
e.funcao_nand();
e.funcao_nor();
e.funcao_xor();