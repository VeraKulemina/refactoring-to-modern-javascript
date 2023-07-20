
function printGreeting(name, language = 'english') {
  let greeting = 'Hello';
  switch (language) {
    case 'french':
      greeting = 'Bonjour';
      break;
    case 'spanish':
      greeting = 'Hola';
      break;
  }

  return greeting.toUpperCase() + "! " + name + ".";
}

function createAngularTemplate(msg) {
  return '<article class="content">\n' //
  + '  <section class="section">\n' //
  + '    <div class="col-md-12">\n' //
  + '      <div class="card">\n' //
  + '        <div class="card-block">\n' //
  + '          <div class="card-title-block">\n' //
  + '            <h3 class="title">\n' //
  + '               ' + msg + '\n' //
  + '            </h3>\n' //
  + '          </div>\n' //
  + '        </div>\n' //
  + '      </div>\n' //
  + '    </div>\n' //
  + '  </section>\n' //
  + '</article>';
}

export {
  printGreeting,
  createAngularTemplate,
};
