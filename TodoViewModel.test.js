import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TodoViewModel } from './TodoViewModel.js';
test('ajouter une tâche met à jour la liste et le compteur', () => {
const vm = new TodoViewModel();
vm.ajouter('Lire le cours');
assert.equal(vm.visibles.get().length, 1);
assert.equal(vm.restantes.get(), 1);
});
test('un titre vide remplit erreur et n’ajoute rien', () => {
  const vm = new TodoViewModel();
  vm.ajouter('');

  assert.notEqual(vm.erreur.get(), '');
  assert.equal(vm.visibles.get().length, 0);
});test('le filtre faites ne garde que les tâches cochées', () => {
  const vm = new TodoViewModel();

  vm.ajouter('A');
  vm.ajouter('B');

  const id = vm.visibles.get()[0].id;
  vm.basculer(id);
  vm.changerFiltre('faites');

  assert.deepEqual(
    vm.visibles.get().map(t => t.title),
    ['A']
  );
});
test('basculer une tâche fait baisser restantes', () => {
  const vm = new TodoViewModel();

  vm.ajouter('Faire le TP');
  const id = vm.visibles.get()[0].id;

  vm.basculer(id);

  assert.equal(vm.restantes.get(), 0);
});
test('un filtre inconnu provoque une erreur', () => {
  const vm = new TodoViewModel();

  vm.changerFiltre('inconnu');

  assert.notEqual(vm.erreur.get(), '');
  assert.equal(vm.filtre.get(), 'toutes');
});