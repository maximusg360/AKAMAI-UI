import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ViewEncapsulation } from '@angular/core';




export interface CpCode {
  contractId: string;
  groupId: string;
  productId: string;
  cpcodeName: string;
  accountSwitchKey: string;
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
    data.cpcodeName.toLowerCase().includes(filter);
}
  

  // Mock data
  cpCodes: CpCode[] = [
    { contractId: 'ctr_123', groupId: 'grp_456', productId: 'prd_789', cpcodeName: 'DemoCode1', accountSwitchKey: 'swk_000' },
    { contractId: 'ctr_222', groupId: 'grp_333', productId: 'prd_444', cpcodeName: 'DemoCode2', accountSwitchKey: 'swk_111' },
    { contractId: 'ctr_123', groupId: 'grp_456', productId: 'prd_789', cpcodeName: 'DemoCode3', accountSwitchKey: 'swk_000' },
    { contractId: 'ctr_222', groupId: 'grp_333', productId: 'prd_444', cpcodeName: 'DemoCode4', accountSwitchKey: 'swk_111' }
  ];
  filteredDataSource: MatTableDataSource<CpCode> = new MatTableDataSource<CpCode>([]);

  dataSource = new MatTableDataSource<CpCode>(this.cpCodes);
  displayedColumns: string[] = ['select', 'contractId', 'groupId', 'productId', 'cpcodeName', 'accountSwitchKey', 'actions'];
  selection = new SelectionModel<any>(true, []);
  

onRowClicked(row: any): void {
  this.selection.toggle(row);
}
  // Search filter
 searchCPCode() {
  const filterValue = this.cpCodeInput.trim().toLowerCase();
  const filtered = this.cpCodes.filter(cp =>
    cp.cpcodeName.toLowerCase().includes(filterValue)
  );
  this.filteredDataSource.data = filtered;
  this.isSearchPerformed = true;
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
    alert(`Delete called for ${row.cpcodeName}`);
  }

  invalidate(row: CpCode) {
    alert(`Invalidate called for ${row.cpcodeName}`);
  }


}
