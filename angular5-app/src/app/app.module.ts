import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatCheckboxModule,
		MatInputModule,
		MatFormFieldModule,
		MatSidenavModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
