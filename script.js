
body {
  background: #40352B; /* dark background behind panel */
  display: flex;
  justify-content: center;
  padding: 20px;
}
#game {
  width: 768px;
  /* Top beige and bottom green gradient background */
  background: linear-gradient(to bottom, #f3dfb7 0%, #f3dfb7 45%, #9ec27f 45%, #9ec27f 100%);
  border: 16px solid #704214; /* wood border color */
  padding: 20px;
  box-sizing: border-box;
}
#game * {
  font-family: 'Press Start 2P', monospace;
  color: #3E2617;
}
h1 {
  text-align: center;
  font-size: 24px;
  margin: 10px 0;
}
h2 {
  font-size: 18px;
  margin: 10px 0 5px;
  text-align: center;
}
.buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.buttons .classBtn {
  width: 150px;
  height: 50px;
  cursor: pointer;
}
#startBtn, #breakBtn {
  display: block;
  margin: 10px auto;
  cursor: pointer;
}
#progressContainer {
  display: flex;
  align-items: center;
  margin: 10px 0;
}
#clockIcon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
#progressBar {
  width: 350px;
  height: 20px;
  border: 4px solid #c29a47;
  box-sizing: content-box;
  margin-right: 10px;
}
#progressFill {
  background: #47a742;
  width: 100%;
  height: 100%;
}
#timer {
  font-size: 18px;
}
#stats {
  display: flex;
  align-items: center;
  margin: 20px 0;
}
#avatar {
  width: 120px;
  height: 120px;
  margin-right: 20px;
}
#statsInfo {
  font-size: 14px;
}
#statsInfo div {
  margin-bottom: 5px;
}
.statIcon {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-right: 5px;
}
/* Hidden elements initially */
#classSelection,
#progressContainer,
#stats,
#breakBtn {
  display: none;
}
