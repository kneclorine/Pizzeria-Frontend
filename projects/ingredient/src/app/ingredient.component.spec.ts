import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IngredientBaseComponent } from './ingredient.component';

describe('IngredientBaseComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        IngredientBaseComponent
      ],
    }).compileComponents();
  });

  it('should create the IngredientBase', () => {
    const fixture = TestBed.createComponent(IngredientBaseComponent);
    const IngredientBase = fixture.componentInstance;
    expect(IngredientBase).toBeTruthy();
  });

  it(`should have as title 'ingredient'`, () => {
    const fixture = TestBed.createComponent(IngredientBaseComponent);
    const IngredientBase = fixture.componentInstance;
    expect(IngredientBase.title).toEqual('ingredient');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(IngredientBaseComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ingredient IngredientBase is running!');
  });
});
