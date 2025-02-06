import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle, TrendingUp } from "lucide-react"

const recentCategories = [
  { name: "Electronics", count: 150 },
  { name: "Clothing", count: 120 },
  { name: "Books", count: 80 },
]

export default function CategoriesCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Categories</CardTitle>
        <Button size="icon">
          <PlusCircle className="h-4 w-4" />
          <span className="sr-only">Add category</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">15 total</div>
        <p className="text-xs text-muted-foreground">3 added this month</p>
        <div className="mt-4">
          <p className="mb-2 font-semibold">Recent Categories:</p>
          <ul className="space-y-2">
            {recentCategories.map((category, index) => (
              <li key={index} className="flex items-center justify-between text-sm">
                <span>{category.name}</span>
                <span className="text-muted-foreground">{category.count} items</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <TrendingUp className="mr-2 h-4 w-4" />
          View All Categories
        </Button>
      </CardFooter>
    </Card>
  )
}

