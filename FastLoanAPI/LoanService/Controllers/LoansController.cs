using LoanService.ExceptionHandling;
using LoanService.Models;
using LoanService.Service;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace LoanService.Controllers
{
   
        [Route("api/[controller]")]
        [ApiController]
        public class LoansController : ControllerBase
        {
            private readonly LoanActiveService _loanService;
            public LoansController(LoanActiveService loanService)
            {
                _loanService = loanService;
            }


            [HttpPost]
            [Route("")]
            public ActionResult LoanCreate(Loan loan)
            {
               
            try
            {
                Loan _loan = _loanService.CreateLoan(loan);
                return Created("api/Loan/created", _loan);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
            [HttpGet]
            public ActionResult<List<Loan>> GetAllLoanOfferings()
            {
               
            try
            {
                List<Loan> _loan = _loanService.GetLoans();
                return Ok(_loan);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpGet]
        [Route("{Id}")]
        public ActionResult GetLoanById(string Id)
        {


            try
            {
                Loan loan = _loanService.GetLoanById(Id);
                if (loan == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(loan);
                }
            }
            catch (LoanNotFoundException u)
            {
                return NotFound(u.Message);
            }

        }
           
        [HttpDelete]
        [Route("{Id}")]
        public ActionResult DeleteLoanById(string Id)
            {
                
                try
                {
                var Request = _loanService.GetLoanById(Id);
                if (Request == null)
                {
                    return NotFound();
                }
                else
                {
                    bool isdeletesuccess = _loanService.DeleteLoanById(Id);
                    return Ok(isdeletesuccess);
                }

            }
                catch (LoanNotFoundException u)
                {
                    return NotFound(u.Message);
                }
            }
        [HttpGet]
        [Route("/api/Loanslid/{lenderId}")]
        public ActionResult GetLoanByLenderId(string LenderId)
        {


            try
            {
                List<Loan> loan = _loanService.GetByLenderId(LenderId);
               
                    return Ok(loan);
                
            }
            catch (LoanNotFoundException u)
            {
                return NotFound(u.Message);
            }

        }

        [HttpGet]
        [Route("/api/Loansbid/{borrowerId}")]
        public ActionResult GetLoanByBorrowerId(string borrowerId)
        {


            try
            {
                List<Loan> loan = _loanService.GetByBorrowerId(borrowerId);

                return Ok(loan);

            }
            catch (LoanNotFoundException u)
            {
                return NotFound(u.Message);
            }

        }
    }
}
