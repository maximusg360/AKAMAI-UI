import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ViewEncapsulation } from '@angular/core';




export interface CpCode {
  detail: string;
  estimatedSeconds: number;
  httpStatus: number;
  purgeId: string;
  supportId: string;
}



@Component({
  selector: 'app-cpcode-list',
  templateUrl: './cpcode-list.component.html',
  styleUrls: ['./cpcode-list.component.css'],
  encapsulation: ViewEncapsulation.None  // ✅ Important
})
export class CpcodeListComponent implements OnInit {    
  cpCodeInput: string = '';
  isSearchPerformed = false;
  ngOnInit(): void {
  // Enable filtering only by cpcodeName
  this.dataSource.filterPredicate = (data: CpCode, filter: string) =>
    data.purgeId.toLowerCase().includes(filter);
}
  

  // Mock data
  cpCodes: CpCode[] = [
  {
    detail: 'Invalidation complete',
    estimatedSeconds: 30,
    httpStatus: 200,
    purgeId: 'pid_001',
    supportId: 'sid_001'
  },
  {
    detail: 'Request accepted',
    estimatedSeconds: 45,
    httpStatus: 202,
    purgeId: 'pid_002',
    supportId: 'sid_002'
  },
  {
    detail: 'Pending request',
    estimatedSeconds: 60,
    httpStatus: 102,
    purgeId: 'pid_003',
    supportId: 'sid_003'
  }
];

  filteredDataSource: MatTableDataSource<CpCode> = new MatTableDataSource<CpCode>([]);

  dataSource = new MatTableDataSource<CpCode>(this.cpCodes);
  displayedColumns: string[] = ['select', 'detail', 'estimatedSeconds', 'httpStatus', 'purgeId', 'supportId', 'actions'];
  selection = new SelectionModel<any>(true, []);
  

onRowClicked(row: any): void {
  this.selection.toggle(row);
}
  // Search filter
 searchCPCode() {
  const filterValue = this.cpCodeInput.trim().toLowerCase();
  const filtered = this.cpCodes.filter(cp =>
    cp.purgeId.toLowerCase().includes(filterValue)
  );
  this.filteredDataSource.data = filtered;
  this.isSearchPerformed = true;
}
clearSearch(): void {
  this.cpCodeInput = '';
  this.filteredDataSource.data = [];
  this.isSearchPerformed = false;
}

  // Master checkbox
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  onToggleRow(row: CpCode) {
  this.selection.toggle(row);
  console.log('Selected rows:', this.selection.selected);
}
 


  // Dummy action handlers
  delete(row: CpCode) {
  alert(`Delete called for Purge ID: ${row.purgeId}`);
}


  invalidate(row: CpCode) {
    alert(`Invalidate called for Purge ID: ${row.purgeId}`);
  }


}
