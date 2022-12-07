import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { InputTextarea } from "primeng/inputtextarea";
import { InputNumberModule } from "primeng/inputnumber";
import { CheckboxModule } from "primeng/checkbox";
import { FormlySelectModule } from "@ngx-formly/core/select";
import { FormlyModule } from "@ngx-formly/core";

import { FormFieldWrapperWrapperComponent } from "./wrappers/field.wrapper";
import { InputFieldComponent } from "./fields/input.field";
import { TextAreaComponent } from "./fields/input.textarea";
import { CheckboxComponent } from "./fields/input.checkbox";
import { SelectComponent } from "./fields/input.select";

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		DropdownModule,
		FormlySelectModule,
		InputTextModule,
		InputTextarea,
		InputNumberModule,
    CheckboxModule,
		FormlyModule.forRoot({
			types: [
				{
					name: "input",
					component: InputFieldComponent,
					wrappers: ["form-field"],
				},
				{
					name: "textarea",
					component: TextAreaComponent,
					wrappers: ["form-field"],
				},
				{
					name: "select",
					component: SelectComponent,
					wrappers: ["form-field"],
				},
				{
					name: "checkbox",
					component: CheckboxComponent,
					wrappers: ["form-field"],
				},
			],
			wrapper: [
				{ name: "form-field", component: FormFieldWrapperWrapperComponent },
				// { name: "numpad", component: SelectComponent },
			],
		}),
	],
	declarations: [
		InputFieldComponent,
		TextAreaComponent,
		SelectComponent,
		CheckboxComponent,
		FormFieldWrapperWrapperComponent,
	],
	exports: [
		InputFieldComponent,
		TextAreaComponent,
		SelectComponent,
		CheckboxComponent,
		FormFieldWrapperWrapperComponent,
	],
	providers: [],
})
export class CoreFormlyModule {}
