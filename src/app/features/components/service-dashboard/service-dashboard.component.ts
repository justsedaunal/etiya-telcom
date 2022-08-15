import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { Service } from '../../services/models/service';
import { ServicesService } from '../../services/services/services/services.service';

@Component({
  selector: 'app-service-dashboard',
  templateUrl: './service-dashboard.component.html',
  styleUrls: ['./service-dashboard.component.css']
})
export class ServiceDashboardComponent implements OnInit {

  serviceList!: Service[]
  pageNumber!: number
  currentPage: number = 0
  pageSize: number = 5;
  servicesInPage!:number[]
  isLoading=true;
  constructor(private services: ServicesService,private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.getAllServices();


  }



  getAllServices() {
    this.services.getAll().subscribe(data => {

      this.serviceList = data
      setTimeout(() => {
        this.isLoading=false


      },2000)
      this.page();
      this.getServicesInPage();

    })
  }

  deleteService(service: Service) {
    if (confirm("Are you sure to delete?")) {
      this.services.delete(service).subscribe()
    }
    setTimeout(() => {
      this.getAllServices();
    }, 1000);

  }

  page() {
    this.pageNumber = Math.ceil((this.serviceList.length / 5))
  }

  getServicesInPage() {
    const start = (this.currentPage-1)*this.pageSize
    const end = (this.currentPage) * this.pageSize
    const servicesInPage = this.serviceList.slice(start,end)
    console.log(servicesInPage)

  }
  back(){
    this.currentPage = this.currentPage-1;
    console.log(this.currentPage)
  }

  next(){
    this.currentPage = this.currentPage+1;
    console.log(this.currentPage)
  }


}
