using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;

namespace UsingAjaxApp.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            if (Request.IsAjaxRequest())
            {
                Thread.Sleep(2000);
                return View();
            }
            return View();
        }

        [HttpGet]
        public void AjaxSleep()
        {
            if (Request.IsAjaxRequest())
            {
                Thread.Sleep(2000);
            }
        }

    }
}
