import './style.css'
import { runApp } from './app.js'

document.querySelector('#app').innerHTML = `
  <header class="header config">
      <div class="config__item" data-config="add-player"><span class="config__item__label">Add Player</span></div>
      <div class="config__item" data-config="leaderboard"><span class="config__item__label">Leaderboard</span></div>
      <div class="config__item" data-config="next-game"><span class="config__item__label">Next Game</span></div>
      <div class="config__item ml bl" data-config="settings"><span class="config__item__label"></span></div>
      <div class="config__item bl" data-config="fullscreen"><span class="config__item__label"></span></div>
      <div class="config__item bl" data-config="reset"><span class="config__item__label">Reset Game</span></div>
  </header>

  <main class="page">

  <section class="players players--3">
      <article class="board player player--template" data-player-id="0">
          <div class="player__name">
              <span class="player__name__label">{{ player.name }}</span>
              <input type="text" name="inp-player-name" placeholder="player" value="" />
              <span class="editor player__name__edit"></span>
          </div>
          
          <div class="player__score">{{ player.score }}</div>

          <div class="player__toolbar">
              <span class="player__toolbar__item" data-tool="pushout" data-pushout="false"></span>
          </div>
          <div class="player__toolbar">
              <span class="player__toolbar__item" data-tool="score" data-value="-1">-1</span>
              <span class="player__toolbar__item" data-tool="score" data-value="+1">+1</span>
              <span class="player__toolbar__item" data-tool="score" data-value="+2">+2</span>
          </div>

          <div class="player__fouls" data-fouls="0">
              <span class="player__foul"></span>
              <span class="player__foul"></span>
              <span class="player__foul"></span>
          </div>

          <!-- remove -->
          <span class="player__remove"></span>
      </article>
      
  </section>

  </main>

  <aside class="leaderboard">
  <div class="leaderboard__container">
      <h3 class="leaderboard__heading">Leaderboard</h3>
      <div class="leaderboard__list">
      </div>
      <span class="leaderboard__container__close"></span>
  </div>
  </aside>
`

runApp()
