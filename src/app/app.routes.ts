import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AdminComponent } from './components/admin/admin.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { SignalComponent } from './components/signal/signal.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { GetApiComponent } from './components/get-api/get-api.component';
import { PostApiComponent } from './components/post-api/post-api.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'databinding',
        pathMatch: 'full'
    },

    {
        path: 'admin',
        component:AdminComponent
    },
    {
        path: 'dataBinding',
        component:DataBindingComponent
    },
    {
        path: 'ng-class',
        component:NgClassComponent
    },
    {
        path: 'control-statement',
        component:ControlStatementComponent
    },
    {
        path: 'signal',
        component:SignalComponent
    },
    {
        path: 'linked-signal',
        component:LinkedSignalComponent
    },
    {
        path: 'ng-style',
        component:NgStyleComponent
    },
    {
        path: 'template-form',
        component:TemplateFormComponent
    },
    {
        path: 'reactive-form',
        component:ReactiveFormComponent
    },
    {
        path: 'get-api',
        component:GetApiComponent
    },
    {
        path: 'post-api',
        component:PostApiComponent
    }
];
