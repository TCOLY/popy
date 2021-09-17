var cp = " UC";
var codcp = ['10,000','20,000','30,000','40,000','50,000','60,000','70,000','80,000','90,000','99,999'];	
var names = ['1upCoop حصل على', 'حصل على Acquetwa4', 'حصل على AimWaka', 'حصل على Anemont2', 'حصل على Arcaloci18', 'حصل على Aurallyfun', 'حصل على Badgenema2', ' BeautySkill99 حصل على ', 'حصل على Cartridgeop', 'حصل على rgynaCaste', 'حصل على Cha2rpavi', 'حصل على Classoranta33', 'حصل على Combat122', 'حصل على Datatah', 'حصل على Datatech34', 'حصل على Emulatorch65', 'حصل على Emulatorte74', 'حصل على FiDungeon67', 'حصل على HStreaming93', 'حصل على Hopetailzz', 'حصل على Hylysackxx', 'حصل على xJoysIndiex', 'حصل على Leaguermof55', 'حصل على LeeWizardz3z', 'حصل على Lemnison42', 'حصل على Leucomm12', 'حصل على Lexondi66', 'حصل على LunaticDj4c', 'حصل على Lutingar2x' ,'حصل على Tournat199', 'حصل على TzTours', 'حصل على T2rinial', 'حصل على Unitara54'];	

function create() {
VanillaToasts.create({
  title: document.body.valueToUse = names[Math.floor(Math.random() * names.length)] || null,
  text: document.body.valueToUse = codcp[Math.floor(Math.random() * codcp.length)] + cp,
  type: 'success',
  icon: 'img/profile.jpg',
  timeout: 2500,
});
setTimeout(create, 3000)
}