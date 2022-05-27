var cor
cor = prompt('Digite a cor: ' ,'')
switch (cor) {
  case 'azul': 
    document.bgColor='#0000ff'
    document.write('#0000ff')
    document.fgColor='#ffffff'
    break;
  case 'verde':
    document.bgColor='#00ff00'
    document.write('#00ff00')
    document.fgColor='#000000'
    break;
  case 'vermelho':
    document.bgColor='#ff0000'
    document.write('#ff0000')
    document.fgColor='#ffffff'
    break;
  case 'amarelo':
    document.bgColor='#ffff00'
    document.write('#ffff00')
    document.fgColor='#000000'
    break;
  case 'branco':
    document.bgColor='#ffffff'
    document.write('#ffffff')
    document.fgColor='#000000'
    break;
  case 'preto':
    document.bgColor='#000000'
    document.write('#000000')
    document.fgColor='#ffffff'
    break;
  case 'laranja':
    document.bgColor='#ffa500'
    document.write('#ffa500')
    document.fgColor='#ffffff'
    break;
  case 'magenta':
    document.bgColor='#ff00ff'
    document.write('#ff00ff')
    document.fgColor='#ffffff'
    break;
  case 'ciano':
    document.bgColor='#00ffff'
    document.write('#00ffff')
    document.fgColor='#000000'
    break;
  case 'violeta':
    document.bgColor='#8f00ff'
    document.write('#8f00ff')
    document.fgColor='#ffffff'
    break;
  case 'roxo':
    document.bgColor='#6a0dad'
    document.write('#6a0dad')
    document.fgColor='#ffffff'
    break;
  case 'rosa':
    document.bgColor='#ffc0cb'
    document.write('#ffc0cb')
    document.fgColor='#000000'
    break;
  case 'marrom':
    document.bgColor='#a52a2a'
    document.write('#a52a2a')
    document.fgColor='#ffffff'
    break;
  case 'bege':
    document.bgColor='#f5f5dc'
    document.write('#f5f5dc')
    document.fgColor='#000000'
    break;
  case 'verde escuro':
    document.bgColor='#013220'
    document.write('#013220')
    document.fgColor='#ffffff'
    break;
  case 'azul escuro':
    document.bgColor='#00008b'
    document.write('#00008b')
    document.fgColor='#ffffff'
    break;
  case 'vermelho escuro':
    document.bgColor='#8b0000'
    document.write('#8b0000')
    document.fgColor='#ffffff'
    break;
  case 'cinza':
    document.bgColor='#808080'
    document.write('#808080')
    document.fgColor='#ffffff'
    break;
  case 'ciano impresso':
    document.bgColor='#00a5ff'
    document.write('#00a5ff')
    document.fgColor='#ffffff'
    break;
  case 'amarelo ouro':
    document.bgColor='#ffc000'
    document.write('#ffc000')
    document.fgColor='#ffffff'
    break;
  case ('rosa escuro'):
    document.bgColor='#aa336a'
    document.write('#aa336a')
    document.fgColor='#ffffff'
    break;
  case ('lilas'):
    document.bgColor='#c8a2c8'
    document.write('#c8a2c8')
    document.fgColor='#ffffff'
    break;
  case ('lilás'):
    document.bgColor='#c8a2c8'
    document.write('#c8a2c8')
    document.fgColor='#fffff0'
    break;
  case ('pink'):
    document.bgColor='#ff00fe'
    document.write('#ff00fe')
    document.fgColor='#ffffff'
    break;
  case ('cinza escuro'):
    document.bgColor='#a9a9a9'
    document.write('#a9a9a9')
    document.fgColor='#ffffff'
    break;
  case ('cinza claro'):
    document.bgColor='#d3d3d3'
    document.write('#d3d3d3')
    document.fgColor='#000000'
    break;
  case ('azul claro'):
    document.bgColor='#add8e6'
    document.write('#add8e6')
    document.fgColor='#000000'
    break;
  case ('verde claro'):
    document.bgColor='#90ee90'
    document.write('#90ee90')
    document.fgColor='#000000'
    break;
  case ('vermelho claro'):
    document.bgColor='#ffcccb'
    document.write('#ffcccb')
    document.fgColor='#000000'
    break;
  case ('amarelo claro'):
    document.bgColor='#ffffe0'
    document.write('#ffffe0')
    document.fgColor='#000000'
    break;
  case ('laranja claro'):
    document.bgColor='#fed8b1'
    document.write('#fed8b1')
    document.fgColor='#000000'
    break;
  case ('roxo claro'):
    document.bgColor='#cbc3e3'
    document.write('#cbc3e3')
    document.fgColor='#000000'
    break;
  case ('marrom claro'):
    document.bgColor='#c4a484'
    document.write('#c4a484')
    document.fgColor='#000000'
    break;
  case ('rosa claro'):
    document.bgColor='#ffb6c1'
    document.write('#ffb6c1')
    document.fgColor='#000000'
    break;
  case ('amarelo escuro'):
    document.bgColor='#8b8000'
    document.write('#8b8000')
    document.fgColor='#ffffff'
    break;
  case ('laranja escuro'):
    document.bgColor='#ff8c00'
    document.write('#ff8c00')
    document.fgColor='#ffffff'
    break;
  case ('vinho'):
    document.bgColor='#722f37'
    document.write('#722f37')
    document.fgColor='#ffffff'
    break;
  case ('azul marinho'):
    document.bgColor='#1e3f5a'
    document.write('#1e3f5a')
    document.fgColor='#ffffff'
    break;
  default:
    document.write(`Vc digitou ${cor}. '<br>' Essa cor não está na lista, '<br>' digite uma cor existente`)
}
