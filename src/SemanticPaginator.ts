import {Component, Input, OnChanges} from "@angular/core";
import {DataTable} from "./DataTable";
import {Paginator} from "./Paginator";
import * as _ from "lodash";

@Component({
    selector: "mfSemanticPaginator",
    template: `
    <mfPaginator #p [mfTable]="mfTable">
        <div class="ui centered grid">
        <div class="center aligned column">
        <div class="ui pagination menu list" *ngIf="p.dataLength > p.rowsOnPage">
            <li [class.disabled]="p.activePage <= 1" (click)="p.setPage(1)">
               <a class="icon item">
                  <i class="left chevron icon"></i>
                </a>
            </li>
            <li *ngIf="p.activePage > 4 && p.activePage + 1 > p.lastPage" (click)="p.setPage(p.activePage - 4)">
                <a class="item">{{p.activePage-4}}</a>
            </li>
            <li *ngIf="p.activePage > 3 && p.activePage + 2 > p.lastPage" (click)="p.setPage(p.activePage - 3)">
                <a class="item">{{p.activePage-3}}</a>
            </li>
            <li *ngIf="p.activePage > 2" (click)="p.setPage(p.activePage - 2)">
                <a class="item">{{p.activePage-2}}</a>
            </li>
            <li *ngIf="p.activePage > 1" (click)="p.setPage(p.activePage - 1)">
                <a class="item">{{p.activePage-1}}</a>
            </li>
            <li class="active">
                <a class="item">{{p.activePage}}</a>
            </li>
            <li *ngIf="p.activePage + 1 <= p.lastPage" (click)="p.setPage(p.activePage + 1)">
                <a class="item">{{p.activePage+1}}</a>
            </li>
            <li *ngIf="p.activePage + 2 <= p.lastPage" (click)="p.setPage(p.activePage + 2)">
                <a class="item">{{p.activePage+2}}</a>
            </li>
            <li *ngIf="p.activePage + 3 <= p.lastPage && p.activePage < 3" (click)="p.setPage(p.activePage + 3)">
                <a class="item">{{p.activePage+3}}</a>
            </li>
            <li *ngIf="p.activePage + 4 <= p.lastPage && p.activePage < 2" (click)="p.setPage(p.activePage + 4)">
                <a class="item">{{p.activePage+4}}</a>
            </li>
            <li [class.disabled]="p.activePage >= p.lastPage" (click)="p.setPage(p.lastPage)">
                <a class="icon item">
                  <i class="right chevron icon"></i>
                </a>
            </li>
        </div>
        </div>
        </div>

    </mfPaginator>
    `,
    directives: [Paginator]
})
export class SemanticPaginator implements OnChanges {
    @Input("rowsOnPageSet") private rowsOnPageSet = [];
    @Input("mfTable") private mfTable: DataTable;

    private minRowsOnPage = 0;

    ngOnChanges(changes:any):any {
        if(changes.rowsOnPageSet) {
            this.minRowsOnPage = _.min(this.rowsOnPageSet)
        }
    }
}
