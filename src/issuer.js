const issuer = {

  GetBank(numb) {

    //source https://stevemorse.org/ssn/cc.html
    // 51-55 mc
    // 4     visa
    // 34, 37amex
    // 300-305     diners carte blanche
    // 36, 38diners int
    // 6011  discover
    // 2014, 2149  er
    // 3     jcb
    // 2131, 1800  jcb

    const invalid = "*** INVALID ***";
    const undetermined = "enter more digits";

    const mc = "MasterCard";
    const visa = "Visa";
    const amex = "American Express";
    const diners = "Diners Club / Carte Blanche";
    const dinersint = "Diners Club / International";
    const discover = "Discover"
    const er = "Diners Club / enRoute";
    const jcb = "JCB";

    let bank = "???";
    let prefix;
    if (numb.length == 0) { // nothing entered yet
      bank = "";
    } else if (numb.charAt(0) > 6) { // 1st digit is 7, 8, or 9
      bank = invalid;
    } else if (numb.charAt(0) == "4") { // 1st digit is 4
      bank = visa;
    } else if (numb.length == 1) { // one digit entered
      bank = undetermined;
    } else if (numb.length >= 2) { // two or more digits entered
      if (numb.substr(0,2) >= "51" && numb.substr(0,2) <= "55") { // 1st 2 digits are 51-55
        bank = mc;
      } else if (numb.charAt(0) == "3") { // first digit is 3
        if (numb.charAt(1) == "4" || numb.charAt(1) == "7") { // 1st 2 digits are 34 or 37
          bank = amex;
        } else if (numb.charAt(1) == "6") { // 1st 2 digits are 36 or 36
          bank = dinersint;
        } else if (numb.charAt(1) == "8") { // 1st 2 digits are 36 or 38
          bank = diners;
        } else if (numb.length == 2) { // exactly two digits entered starting with a 3
          if (numb.charAt(1) == "0") { // 1st 2 digits are 30
            bank = undetermined;
          } else {
            bank = jcb;
          }
        } else if (numb.substr(1,2) >= "00" &&
                   numb.substr(1,2) <= "05") { // 1st 3 digits are 300-305
          bank = diners;
        } else { // 1st digit is 3 and none of the special cases for 3 apply
          bank = jcb;
        }
      } else if (numb.length == 2) { // exactly 2 digits
        prefix = numb.substr(0,2);
        if (prefix != "30" && prefix != "60" && // 30 is for diners, 60 is for discover
            prefix != "20" && // for enRoute
            prefix != "21" && prefix != "18") {
           // doesn't start with any remaining allowable sequence
          bank = invalid;
        } else { // need more than 2 digits to determine the bank
          bank = undetermined;
        }
      } else if (numb.length == 3) { // exactly 3 digits
        prefix = numb.substr(0,3);
        if (prefix != "601" &&
            prefix != "201" && prefix != "214" && // for enRoute
            prefix != "213" && prefix != "180") {
          // doesn't start with any remaining allowable sequence
          bank = invalid;
        } else { // need more than 3 digits to determine the bank
          bank = undetermined;
        }
      } else if (numb.length >= 4) { // 4 or more digits
        prefix = numb.substr(0,4);
        if (prefix == "6011") { // first 4 digits are 6011
          bank = discover;
        } else if (prefix == "2131" || prefix == "1800") { // first 4 digits are 2131 or 1800
          bank = jcb;
        } else if (prefix == "2014" || prefix == "2149") { // first 4 digits are 2014 or 2149
          bank = er;
        } else { // nothing left, it's invalid
          bank = invalid;
        }
      }
    }
    return bank;
  }

}

export default issuer;