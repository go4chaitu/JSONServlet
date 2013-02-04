import java.io.*;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.servlet.*;
import javax.servlet.http.*;
import net.sf.json.JSONArray;

public class JSONServlet extends  HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
		System.out.println("GET Method!!!!");
	 JSONArray arrayObj=new JSONArray();
	 arrayObj.add("MCA");
	 arrayObj.add("Amit Kumar");
	 arrayObj.add("19-12-1986");
	 arrayObj.add(24);
	 arrayObj.add("Scored");
	 arrayObj.add(new Double(66.67));
     response.setContentType("application/json");
     
	  PrintWriter out = response.getWriter();
		out.println(arrayObj);

	}
	public void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
		System.out.println("POST Method!!!!");
		 Map paramMap = request.getParameterMap();
		 Set keySet = paramMap.keySet();
		 
		 Iterator itr = keySet.iterator();
		 while( itr.hasNext() )
		 {
			 System.out.println(itr.next());
		 }
		 JSONArray arrayObj=new JSONArray();
		 arrayObj.add("MCA");
		 arrayObj.add("Amit Kumar");
		 arrayObj.add("19-12-1986");
		 arrayObj.add(24);
		 arrayObj.add("Scored");
		 arrayObj.add(new Double(66.67));
	     response.setContentType("application/json");
	     
		  PrintWriter out = response.getWriter();
			out.println(arrayObj);

		}	
}
