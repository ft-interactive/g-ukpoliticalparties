var fills = require('g-chartcolour').ukPoliticalParties;
var lines = require('g-chartcolour').ukPoliticalPartiesText;

var data = [{
  name:'Conservative Party',
  label:'Conservative',
  alias:'conservative,conservatives,tory,tory party,tories,conservative party', //aliases should be listed in lower case
  shortname:'Con',
  ft_id:'c',
  pa_id:'C',
  fillColour:fills.conservative,
  lineColour:lines.conservative
},{
  name:'Labour Party',
  label:'Labour',
  alias:'labour party,labour,labour/co-op,labour and co-operative party',
  shortname:'Lab',
  ft_id:'l',
  pa_id:'Lab',
  fillColour:fills.labour,
  lineColour:lines.labour
},{
  name:'Liberal Democrats',
  label:'Liberal Democrat',
  alias:'liberal democrat,lib dems,lib dem,liberal,liberals',
  shortname:'LD',
  ft_id:'ld',
  pa_id:'LD',
  fillColour:fills['liberal democrats'],
  lineColour:lines['liberal democrats']
},{
  name:'United Kingdom Independence Party',
  label:'Ukip',
  alias:'uk independence party,ukip',
  shortname:'Ukip',
  ft_id:'ukip',
  pa_id:'UKIP',
  fillColour:fills.ukip,
  lineColour:lines.ukip
},{
  name:'Greens',
  label:'Green',
  shortname:'Green',
  alias:'grn',
  ft_id:'g',
  pa_id:'Green',
  fillColour:fills.green,
  lineColour:lines.green
},{
  name:'Scottish National Party',
  label:'SNP',
  shortname:'SNP',
  ft_id:'snp',
  pa_id:'',
  fillColour:fills.snp,
  lineColour:lines.snp
},{
  name:'Demoratic Unionist Party',
  label:'Democratic Unionist',
  shortname:'DUP',
  ft_id:'dup',
  pa_id:'',
  fillColour:fills.dup,
  lineColour:lines.dup
},{
  name:'Sinn Féin',
  label:'Sinn Féin',
  alias:'sinn fein',
  shortname:'SF',
  ft_id:'sf',
  pa_id:'',
  fillColour:fills.sf,
  lineColour:lines.sf
},{
  name:'Plaid Cymru',
  label:'Plaid Cymru',
  alias:'party of wales',
  shortname:'PC',
  ft_id:'pc',
  pa_id:'',
  fillColour:fills.pc,
  lineColour:lines.pc
},{
  name:'Alliance Party',
  label:'Alliance',
  shortname:'alliance',
  ft_id:'a',
  pa_id:'',
  fillColour:fills.alliance,
  lineColour:lines.alliance
},{
  name:'Independent',
  label:'Independent',
  alias:'Ind,independents',
  shortname:'Ind',
  ft_id:'i',
  pa_id:'Ind',
  fillColour:fills.independent,
  lineColour:lines.independent
},{
  name:'Other',
  label:'Other',
  alias:'oth,others',
  shortname:'oth',
  ft_id:'oth',
  pa_id:'',
  fillColour:fills.other,
  lineColour:lines.other
},{
  name:'Social Democratic and Labour Party',
  label:'SDLP',
  shortname:'SDLP',
  ft_id:'sdlp',
  pa_id:'',
  fillColour:fills.sdlp,
  lineColour:lines.sdlp
},{
  name:'Ulster Unionist Party',
  label:'Ulster Unionist',
  shortname:'UUP',
  ft_id:'uup',
  pa_id:'',
  fillColour:fills.uup,
  lineColour:lines.uup
},{
  name:'No overall control',
  label:'No overall control',
  alias:'noc',
  shortname:'NOC',
  ft_id:'noc',
  pa_id:'NOC',
  fillColour:fills.independent,
  lineColour:lines.independent
},{
  name:'Residents Associations',
  label:'Residents Associations',
  alias:'ra,ratepayers or residents',
  shortname:'RA',
  ft_id:'ra',
  pa_id:'R',
  fillColour:fills.independent,
  lineColour:lines.independent
}];

module.exports = function (str){
  return data.find(function(party){
    var found = false;
    Object.keys(party).forEach(function(key){
      if( str.toLowerCase() === party[key].toLowerCase() ) found = true;
      if(key === 'alias'){ //special case
        if( party[key].split(',').indexOf(str.toLowerCase()) > -1 ) found = true;
      }
    });
    return found;
  })
}
