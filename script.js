class Start{
    constructor(){
        this.playerName = "Fandi"
        this.botName = "Computer"
        this.playerOption;
        this.botOption;
        this.winner = ""
    }

    get getBotOption(){
        return this.botOption;
    }

    set setBotOption(option){
        this.botOption = option
    }

    get getPlayerOption(){
        return this.playerOption
    }

    set setPlayerOption (option){
        this.playerOption = option;
    }

    botBrain(){
        const option = ["🖐", "✌", "✊"]
        const botGenerate = option[Math.floor(Math.random() * option.length)]
        return botGenerate
    }

    winCalculate(){
        if (this.botOption == '🖐' && this.playerOption == '✌') {
            return this.winner = this.playerName
        } else if(this.botOption == '🖐' && this.playerOption == '✊'){
            return this.winner = this.botName
        }else if(this.botOption == '✌' && this.playerOption == '🖐'){
            return this.winner = this.botName
        }else if(this.botOption == '✌' && this.playerOption == '✊'){
            return this.winner = this.playerName
        }else if(this.botOption == '✊' && this.playerOption == '🖐'){
            return this.winner = this.playerName
        }else if(this.botOption == '✊' && this.playerOption == '✌'){
            return this.winner = this.botName
        }else {
            return this.winner = "SERI"
        }
    }

    matcResult(){
        if (this.winner != "SERI") {
            return `${this.winner} MENANG`;
        } else {
            return `WAHH ${this.winner}, GAK ADA YANG MENANG`;
        }
    }
}

function pickOption(params){
    const start = new Start();
    start.setPlayerOption = params
    start.setBotOption = start.botBrain()
    start.winCalculate()
    // console.log('kamu memilih', start.playerOption)
    // console.log("Komputer memilih", start.botOption)
    // console.log('pemenangnya : ',start.winner)

    const inGame = document.getElementById('inGame')
    const result = document.getElementById('result')
    inGame.textContent = "..."
    result.textContent = "..."

    setTimeout(() => {
        inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOption}`
        result.textContent = start.matcResult()
    }, 1500)
}