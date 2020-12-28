import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Course } from 'src/app/core/services/course/model/course';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private BASE_URL: string = 'http://localhost:3004/courses';

  public courses: Course[] = [];

  constructor(private http: HttpClient, private loadingServce: LoadingService) {}

  public search(text: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.BASE_URL}?textFragment=${text}`);
  }

  public getCourses(count: number): Observable<Course[]> {
    this.loadingServce.loading$.next(true);
    return this.http.get<Course[]>(`${this.BASE_URL}?start=0&count=${count}`)
    .pipe(finalize(() => this.loadingServce.loading$.next(false)));
  }

  public getCourseById(id: number): Observable<Course> {
    this.loadingServce.loading$.next(true);
    return this.http.get<Course>(`${this.BASE_URL}?id=${id}`)
    .pipe(finalize(() => this.loadingServce.loading$.next(false)));
  }

  public deleteCourse(id: number): Observable<{}> {
    this.loadingServce.loading$.next(true);
    return this.http.delete<{}>(`${this.BASE_URL}/${id}`)
    .pipe(finalize(() => this.loadingServce.loading$.next(false)));

  }

  public createCourse(course: Course): Observable<Course> {
    this.loadingServce.loading$.next(true);
    return this.http.post<Course>(`${this.BASE_URL}`, course)
    .pipe(finalize(() => this.loadingServce.loading$.next(false)));

  }

  public updateCourse(course: Course): Observable<Course> {
    this.loadingServce.loading$.next(true);
    return this.http.patch<Course>(`${this.BASE_URL}/${course.id}`, course)
    .pipe(finalize(() => this.loadingServce.loading$.next(false)));
  }
}
