import { Component, OnInit } from '@angular/core';
import { MemberService } from '../_services/member.service';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styleUrls: ['./members-table.component.scss']
})
export class MembersTableComponent implements OnInit {

  members = [
    {
      dish: "Francisco Vilchez",
      price: "1991/05/26",
      created_date: "now",
      modified_date: "now"
    },
    {
      dish: "Zlatan Ibrahimovic",
      price: "1981/10/03",
      created_date: "now",
      modified_date: "now"
    }
  ]

  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit(): void {
    this.memberService.getMembers().subscribe(data => {
      this.members = data;
    })
  }
}