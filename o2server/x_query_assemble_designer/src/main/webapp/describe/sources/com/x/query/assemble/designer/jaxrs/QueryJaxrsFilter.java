package com.x.query.assemble.designer.jaxrs;

import javax.servlet.annotation.WebFilter;

import com.x.base.core.project.jaxrs.AnonymousCipherManagerUserJaxrsFilter;

@WebFilter(urlPatterns = "/jaxrs/query/*", asyncSupported = true)
public class QueryJaxrsFilter extends AnonymousCipherManagerUserJaxrsFilter {

}
