new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		turns: []
	},
	methods: {
		startGame(){
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.gameIsRunning = true;
			this.turns = [];
		},
		attack(){
			var damage = this.calculateDamage(10, 3);
			this.turns.unshift({
				isPlayer: true,
				text: 'Player hits Monster for ' + damage
			});
			if (this.checkWin()){
				return;
			}
			this.monsterHealth -= damage;
			
			if(this.checkWin()){
				return;
			}

			this.monsterAttacks();

		},
		specialAttack(){
			var damage = this.calculateDamage(20, 10);
			if (this.checkWin()){
				return;
			}
			this.monsterHealth -= damage;
			
			if(this.checkWin()){
				return;
			}
			this.monsterAttacks();

			this.turns.unshift({
				isPlayer: true,
				text: 'Player hits Monster hard for ' + damage
			});

		},
		heal(){
			if(this.playerHealth <= 90){
				this.playerHealth += 10;
			} else {
				this.playerHealth = 100;
			}
			this.turns.unshift({
				isPlayer: true,
				text: 'Player was healed by 10'
			});
		},
		

		giveUp(){
			this.gameIsRunning = false;
		},

		monsterAttacks(){
			var damage = this.calculateDamage(12, 5);
			this.turns.unshift({
				isPlayer: false,
				text: 'Monster hits Player for ' + damage
			});

			this.playerHealth -= damage;
			
			this.checkWin();
		},

		calculateDamage(max, min){
			return Math.max(Math.floor(Math.random() * max + 1), min);
		},
		checkWin(){
			if(this.monsterHealth <= 0){
				if(confirm('You won! New Game?')){
					this.startGame();
				} else{
					this.gameIsRunning = false;
				}
				return true;
			} else if (this.playerHealth <= 0){
				if(confirm('You lost! New Game?')){
					this.startGame();
				} else{
					this.gameIsRunning = false;
				}
				return false;
			}
		}
	}
});