import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from '../../services/models/service';
import { ServicesService } from '../../services/services/services/services.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {


  serviceForm!: FormGroup;
  service!: Service;

  constructor(private formBuilder: FormBuilder,private activatedRoute:ActivatedRoute ,private router: Router, private servicesService: ServicesService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getServiceIdFromRoute();
  }


  createServiceForm(): void {
    this.serviceForm = this.formBuilder.group({
      name: [this.service?.name || '', Validators.required]
    })
  }

  save() {
    if (this.service) this.update();
    else {
      this.add();


    }
  }

  update() {
    if (this.serviceForm.invalid) {
      this.messageService.add({ severity: 'warn', summary: 'Update', detail: 'There are missing fields.' });
      return;

    }

    const service: Service = Object.assign({ id: this.service.id }, this.serviceForm.value);
    this.servicesService.update(service).subscribe(() => {
      setTimeout(() => {
        this.router.navigateByUrl("");
        this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Service has been updated.' });
      }, 1000)
    })
  }

  add() {
    if (!this.serviceForm.valid) {
      this.messageService.add({ severity: 'warn', summary: 'Add', detail: 'There are missing fields.' });
      return;
    }

    const service: Service = { ...this.serviceForm.value }

    this.servicesService.add(service).subscribe(() => {
      setTimeout(() => {
        this.messageService.add({ severity: 'success', summary: 'Add', detail: 'Service has been added.' });
        this.router.navigateByUrl("");
      }, 1000);
    })
  }





  getServiceIdFromRoute(){
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.getServiceById(params['id']);
      else{
        this.createServiceForm();
      };
    });
  }

  getServiceById(id:number){
    this.servicesService.getServiceById(id).subscribe((data) => {
      this.service = data;
      this.createServiceForm();
    });

  }


}
