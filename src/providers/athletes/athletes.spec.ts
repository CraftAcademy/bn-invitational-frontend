import { AthletesProvider } from './athletes';
import { TestBed, inject } from '@angular/core/testing';

import { HttpModule, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('Athletes Provider', () => {

    let mockBackend, provider, athletes;

    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [ HttpModule ],
          providers: [
            MockBackend,
            AthletesProvider,
            { provide: XHRBackend, useClass: MockBackend }
          ]
        });
      });
    
      beforeEach(inject([MockBackend, AthletesProvider], (_mockBackend, _AthletesProvider) => {
        mockBackend = _mockBackend;
        provider = _AthletesProvider;
      }));
    
      beforeEach(() => {
        athletes = [{
          "id": "1",
          "type": "athletes",
          "attributes": {
            "name": "Kalle",
            "home": "Oslo",
            "description": "refreshing",
            "image": "image",
            "available": true,
            "type": "drink"
          }
        }];
      })

      it('should be created', () => {
        expect(provider).toBeTruthy();
      });
    
      it('getAll: should return a list of products', () => {
        mockBackend.connections.subscribe(connection => {
          connection.mockRespond(new Response({
            body: JSON.stringify(athletes)
          }))
        })
    
        provider.all().subscribe(_athletes => {
          expect(_athletes[0]).toEqual(athletes);
          expect(_athletes.length).toBe(1);
        })
      })
    
      it('show: returns a single product given its id', () => {
        let response = athletes[0];
    
        mockBackend.connections.subscribe(connection => {
          connection.mockRespond(new Response({
            body: JSON.stringify(response)
          }))
        })
    
        provider.show(1).subscribe(athlete => {
          expect(athlete).toEqual(response);
        })
      })

});