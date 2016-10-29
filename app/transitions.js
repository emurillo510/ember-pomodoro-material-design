export default function(){

  this.transition(
    this.debug(),
    this.fromRoute('index'),
    this.toRoute('pomodoros'),
    this.use('toLeft'),
    this.reverse('toRight')
  );



}