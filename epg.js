// EPG data: array of channels, each with number, name, and programs array.
// Each program corresponds to a time slot column in the UI.
const channels = [
  { number: 101, name: 'BBC One', programs: [
      { title: 'Morning News', start: '06:00' },
      { title: 'Cartoons', start: '06:30' },
      { title: 'Soap', start: '07:00' },
      { title: 'Breakfast', start: '07:30' },
      { title: 'World News', start: '08:00' },
      { title: 'Drama', start: '08:30' },
  ]},
  { number: 102, name: 'BBC Two', programs: [
      { title: 'Yoga Today', start: '06:00' },
      { title: 'Kids Zone', start: '06:30' },
      { title: 'Talk Show', start: '07:00' },
      { title: 'Documentary', start: '07:30' },
      { title: 'Morning Cook', start: '08:00' },
      { title: 'Sitcom', start: '08:30' },
  ]},
  { number: 201, name: 'ITV', programs: [
      { title: 'Cartoons', start: '06:00' },
      { title: 'Local News', start: '06:30' },
      { title: 'Business', start: '07:00' },
      { title: 'Live Show', start: '07:30' },
      { title: 'Morning Drama', start: '08:00' },
      { title: 'Cooking', start: '08:30' },
  ]},
  { number: 301, name: 'Channel 4', programs: [
      { title: 'Early Movie', start: '06:00' },
      { title: 'Fitness', start: '06:30' },
      { title: 'Reality', start: '07:00' },
      { title: 'Kids', start: '07:30' },
      { title: 'Science', start: '08:00' },
      { title: 'Comedy', start: '08:30' },
  ]},
  { number: 401, name: 'Sky News', programs: [
      { title: 'Live', start: '06:00' },
      { title: 'Bulletin', start: '06:30' },
      { title: 'Interview', start: '07:00' },
      { title: 'Roundup', start: '07:30' },
      { title: 'Analysis', start: '08:00' },
      { title: 'Markets', start: '08:30' },
  ]},
];

// times array defines each column's start time label
const times = ['06:00','06:30','07:00','07:30','08:00','08:30'];

// state for selection
let selectedRow = 0;
let selectedCol = 0;

// DOM references
const container = document.getElementById('epg-container');

function renderEPG(){
  container.innerHTML = '';

  // header row with a channel column placeholder and time headings
  const header = document.createElement('div');
  header.className = 'epg-header';
  const channelCol = document.createElement('div');
  channelCol.className = 'channel-col';
  channelCol.textContent = 'Channel';
  header.appendChild(channelCol);
  times.forEach(t=>{
    const th = document.createElement('div');
    th.className = 'time-heading';
    th.textContent = t;
    header.appendChild(th);
  });
  container.appendChild(header);

  // rows
  channels.forEach((ch, rIdx) => {
    const row = document.createElement('div');
    row.className = 'epg-row';
    // channel cell
    const channelCell = document.createElement('div');
    channelCell.className = 'channel-cell';
    channelCell.innerHTML = `<div>${ch.number}</div><div style="font-size:13px; color:var(--muted); margin-top:6px">${ch.name}</div>`;
    row.appendChild(channelCell);

    // program cells
    ch.programs.forEach((prog, cIdx) => {
      const cell = document.createElement('div');
      cell.className = 'program-cell';
      cell.setAttribute('role','button');
      cell.setAttribute('tabindex','0');
      cell.dataset.row = rIdx;
      cell.dataset.col = cIdx;
      cell.innerHTML = `<div class="program-title">${prog.title}</div><div class="program-time">${prog.start}</div>`;
      cell.addEventListener('click', ()=> {
        setSelection(rIdx, cIdx, { scroll:true });
      });
      cell.addEventListener('keydown', (e)=>{
        // let enter/space select too
        if(e.key === 'Enter' || e.key === ' '){
          e.preventDefault();
          setSelection(rIdx, cIdx, { scroll:true });
        }
      });
      row.appendChild(cell);
    });

    container.appendChild(row);
  });

  // ensure initial selection visible
  setSelection(selectedRow, selectedCol, { scroll:true, focus:true });
}

function setSelection(row, col, opts={}) {
  // clamp row and col
  row = Math.max(0, Math.min(row, channels.length - 1));
  const maxCols = channels[row].programs.length;
  col = Math.max(0, Math.min(col, maxCols - 1));

  // remove previous selection class
  const prev = container.querySelector('.program-cell.epg-selected');
  if(prev) prev.classList.remove('epg-selected');

  // find new element
  const newEl = container.querySelector(`.program-cell[data-row="${row}"][data-col="${col}"]`);
  if(newEl){
    newEl.classList.add('epg-selected');
    if(opts.focus) newEl.focus();
    if(opts.scroll){
      // keep selected cell centered where possible
      newEl.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
    selectedRow = row;
    selectedCol = col;
  }
}

// keyboard navigation
window.addEventListener('keydown', (e)=>{
  // only handle arrows
  const key = e.key;
  if(!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(key)) return;

  e.preventDefault();

  let nextRow = selectedRow;
  let nextCol = selectedCol;

  if(key === 'ArrowUp'){
    nextRow = Math.max(0, selectedRow - 1);
    // keep same col where possible (if target row has fewer columns, clamp)
    nextCol = Math.min(nextCol, channels[nextRow].programs.length - 1);
  } else if(key === 'ArrowDown'){
    nextRow = Math.min(channels.length - 1, selectedRow + 1);
    nextCol = Math.min(nextCol, channels[nextRow].programs.length - 1);
  } else if(key === 'ArrowLeft'){
    nextCol = Math.max(0, selectedCol - 1);
  } else if(key === 'ArrowRight'){
    nextCol = Math.min(channels[selectedRow].programs.length - 1, selectedCol + 1);
  }

  setSelection(nextRow, nextCol, { scroll:true, focus:true });
});

// render on load
renderEPG();
