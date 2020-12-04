import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/core/services/course/model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private BASE_URL: string = 'http://localhost:3004/courses';

  public courses: Course[] = [];

  constructor(private http: HttpClient) {}

  public getCourses(count: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.BASE_URL}?start=0&count=${count}`);
    }

  public deleteCourse(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.BASE_URL}/${id}`);
}

  public search(text: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.BASE_URL}?textFragment=${text}`);
  }

  public createCourse(course: Course): Observable<Course[]> {
    return this.http.post<Course[]>(`${this.BASE_URL}`, course);
  }

  public updateCourse(course: Course): Observable<Course[]> {
      return this.http.patch<Course[]>(`${this.BASE_URL}/${course.id}`, course);
  }

  public getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.BASE_URL}?id=${id}`);
  }

}
