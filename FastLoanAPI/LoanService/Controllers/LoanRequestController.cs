using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using LoanService.Models;
using LoanService.Service;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;
using LoanService.ExceptionHandling;

namespace LoanService.Controllers
{

   
        [Route("api/[controller]")]
        [ApiController]
        public class LoanRequestController : ControllerBase
        {
             readonly LoanRequestService _LoanRequestService;
            public LoanRequestController(LoanRequestService loanRequestService)
            {
                _LoanRequestService = loanRequestService;

            }
        

        [HttpPost]
        public ActionResult Create(LoanRequest loanRequest)
        {
            
            try
            {
                LoanRequest loancreate = _LoanRequestService.CreateRequest(loanRequest);
                return Created("api/LoanRequest/created", loancreate);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpGet]
        public ActionResult Get()
        {
           
            
                List<LoanRequest> loanrequest = _LoanRequestService.GetAllrequests();
                return Ok(loanrequest);
            
            
        }

        [HttpDelete]
        [Route("{Id}")]
        public ActionResult Delete(string Id)
        {
            
            try
            {
                var Request = _LoanRequestService.GetById(Id);
                if (Request == null)
                {
                    return NotFound();
                }
                else
                {
                    bool isdeletesuccess = _LoanRequestService.DeleteRequest(Id);
                    return Ok(isdeletesuccess);
                }

            }
            catch (LoanRequestNotFoundException u)
            {
                return NotFound(u.Message);
            }
        }
        [HttpGet("{Id}")]

        public ActionResult Getbyid(string Id)
        {
           
            try
            {
                var request = _LoanRequestService.GetById(Id);
                return Ok(request);
            }
            catch (LoanRequestNotFoundException u)
            {
                return NotFound(u.Message);
            }
        }
        [HttpGet("/api/LoanRequest/LoanLenderId/{lenderId}")]

        public ActionResult GetbyLenderid(string lenderId)
        {

            try
            {
                List<LoanRequest> request = _LoanRequestService.GetByLenderId(lenderId);
                return Ok(request);
            }
            catch (LoanRequestNotFoundException u)
            {
                return NotFound(u.Message);
            }
        }
        [HttpPut]
        [Route("{Id}")]
        public ActionResult Update(string Id, LoanRequest loanrequest)
        {
           
            try
            {
                LoanRequest _loanrequest = _LoanRequestService.UpdatebyId(Id, loanrequest);
                return Ok(_loanrequest);

            }
            catch (LoanRequestNotFoundException u)
            {
                return NotFound(u.Message);
            }
        }
    }
    
}
