import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { SampleService } from './sample.service';

describe('SampleService', () => {
  let service: SampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(SampleService);  // DI for Service class. 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("addition of two number testing ",()=> {
    let result = service.addNumber(10,20);
    expect(30).toEqual(result);
  })

  it("Fake Service testing ",(end)=> {
    service.getFakeRestAPI().subscribe({
      next:(data:any)=> {
        //console.log(data.length);
        expect(200).toEqual(data.length);
        let firstRecord = data[0];
        expect(firstRecord.id).toEqual(1);
        expect(firstRecord.userId).toEqual(1);
        expect(firstRecord.title).toEqual("delectus aut autem11");
        expect(firstRecord.completed).toBeFalsy();
        end();
       // done();   // it pause this code to get the get from rest api
      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed...")
    });

  })
});
