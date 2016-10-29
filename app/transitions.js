export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('pomodoros'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};