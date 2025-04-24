<script>
	let cardsData = [
		{ image: 'chili.png', name: 'chili' },
		{ image: 'grapes.png', name: 'grapes' },
		{ image: 'lemon.png', name: 'lemon' },
		{ image: 'orange.png', name: 'orange' },
		{ image: 'pineapple.png', name: 'pineapple' },
		{ image: 'strawberry.png', name: 'strawberry' },
		{ image: 'tomato.png', name: 'tomato' },
		{ image: 'watermelon.png', name: 'watermelon' },
		{ image: 'cherries.png', name: 'cherries' }
	];

	let cards = [...cardsData, ...cardsData];
	let firstCard, secondCard;
	let lockBoard = false;
	let score = 0;

	function shuffleCards() {
		let currentIndex = cards.length,
			randomIndex,
			temporaryValue;
		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			temporaryValue = cards[currentIndex];
			cards[currentIndex] = cards[randomIndex];
			cards[randomIndex] = temporaryValue;
		}
	}

	function flipCard(event) {
		const card = event.currentTarget;
		if (lockBoard) return;
		if (card === firstCard) return;

		card.classList.add('flipped');

		if (!firstCard) {
			firstCard = card;
			return;
		}

		secondCard = card;
		score++;
		lockBoard = true;

		checkForMatch();
	}

	function checkForMatch() {
		let isMatch = firstCard.dataset.name === secondCard.dataset.name;
		isMatch ? disableCards() : unflipCards();
	}

	function disableCards() {
		firstCard.removeEventListener('click', flipCard);
		secondCard.removeEventListener('click', flipCard);
		resetBoard();
	}

	function unflipCards() {
		setTimeout(() => {
			firstCard.classList.remove('flipped');
			secondCard.classList.remove('flipped');
			resetBoard();
		}, 1000);
	}

	function resetBoard() {
		firstCard = null;
		secondCard = null;
		lockBoard = false;
	}

	function restart() {
		document.querySelectorAll('.card.flipped').forEach((card) => {
			card.classList.remove('flipped');
		});

		setTimeout(() => {
			resetBoard();
			shuffleCards();
			score = 0;
			cards = [...cards];
		}, 600);
	}
</script>

<h1>Memo Game</h1>

<div class="grid-container">
	{#each cards as { image, name }}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="card" data-name={name} on:click={flipCard}>
			<div class="front">
				<img class="front-image" src="/images/memo-cards/{image}" alt={name} />
			</div>
			<div class="back"></div>
		</div>
	{/each}
</div>

<p>Flips: <span class="score">{score}</span></p>

<div class="actions">
	<button on:click={restart}>Restart</button>
</div>

<style>
	h1 {
		text-align: center;
	}

	p {
		text-align: center;
		font-size: 30px;
		font-weight: bold;
	}

	.actions {
		display: flex;
		justify-content: center;
	}

	.actions button {
		padding: 8px 16px;
		font-size: 30px;
		border-radius: 10px;
		background-color: #27ae60;
		color: white;
	}

	.grid-container {
		perspective: 1000px;
		display: grid;
		justify-content: center;
		grid-gap: 16px;
		grid-template-columns: repeat(6, 140px);
		grid-template-rows: repeat(2, calc(140px / 2 * 3));
	}

	.card {
		height: calc(140px / 2 * 3);
		width: 140px;
		border-radius: 10px;
		background-color: white;
		position: relative;
		transform-style: preserve-3d;
		transition: all 0.5s ease-in-out;
	}

	.front-image {
		width: 60px;
		height: 60px;
	}

	:global(.card.flipped) {
		transform: rotateY(180deg);
	}

	.front,
	.back {
		backface-visibility: hidden;
		position: absolute;
		border-radius: 10px;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}

	.card .front {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.card .back {
		background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='25' height='25' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M25 30a5 5 0 110-10 5 5 0 010 10zm0-25a5 5 0 110-10 5 5 0 010 10zM0 30a5 5 0 110-10 5 5 0 010 10zM0 5A5 5 0 110-5 5 5 0 010 5zm12.5 12.5a5 5 0 110-10 5 5 0 010 10z'  stroke-width='1' stroke='none' fill='hsla(174, 100%, 29%, 1)'/><path d='M0 15a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm25 0a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM12.5 2.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0 25a2.5 2.5 0 110-5 2.5 2.5 0 010 5z'  stroke-width='1' stroke='none' fill='hsla(187, 100%, 42%, 1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
		background-position: center center;
		background-size: cover;
		backface-visibility: hidden;
	}

	.card .front {
		transform: rotateY(180deg);
	}
</style>
