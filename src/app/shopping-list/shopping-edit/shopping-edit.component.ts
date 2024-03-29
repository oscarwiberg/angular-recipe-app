import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editingItemIndex: number;
  editedItem: Ingredient;

constructor(private shoppingListService: ShoppingListService){

}

ngOnInit() {
this.subscription = this.shoppingListService.startedEditing.subscribe(
  (index: number) => {
    this.editingItemIndex = index;
    this.editMode = true;
    this.editedItem = this.shoppingListService.getIngredient(index);
    this.slForm.setValue({
      name: this.editedItem.name,
      amount: this.editedItem.amount
    })
  }
);
}

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editingItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClearInput() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDeleteInput() {
    this.shoppingListService.deleteIngredient(this.editingItemIndex);
    this.onClearInput();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
