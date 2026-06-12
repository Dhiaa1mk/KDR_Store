import { useState } from 'react';
import { 
  Package, ShoppingCart, Users, TrendingUp, DollarSign, Eye, Edit, Trash2, Plus,
  Search, Filter, MoreVertical, CheckCircle, XCircle, Clock
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu';
import { products } from '../data/products';

export function Admin() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for orders
  const orders = [
    { id: 'CMD-001', customer: 'Ahmed Ben Ali', total: 358, status: 'pending', date: '2026-06-10', items: 3 },
    { id: 'CMD-002', customer: 'Fatima Trabelsi', total: 179, status: 'completed', date: '2026-06-10', items: 2 },
    { id: 'CMD-003', customer: 'Mohamed Khalil', total: 248, status: 'processing', date: '2026-06-09', items: 2 },
    { id: 'CMD-004', customer: 'Leila Mansour', total: 89, status: 'completed', date: '2026-06-09', items: 1 },
    { id: 'CMD-005', customer: 'Youssef Kacem', total: 427, status: 'pending', date: '2026-06-08', items: 4 },
  ];

  // Mock data for customers
  const customers = [
    { id: 1, name: 'Ahmed Ben Ali', email: 'ahmed@email.com', orders: 5, total: 1250, joined: '2026-01-15' },
    { id: 2, name: 'Fatima Trabelsi', email: 'fatima@email.com', orders: 3, total: 680, joined: '2026-02-20' },
    { id: 3, name: 'Mohamed Khalil', email: 'mohamed@email.com', orders: 7, total: 1890, joined: '2025-12-10' },
    { id: 4, name: 'Leila Mansour', email: 'leila@email.com', orders: 2, total: 340, joined: '2026-03-05' },
  ];

  const stats = [
    { 
      title: 'Revenu Total', 
      value: '42,850 DT', 
      change: '+12.5%', 
      icon: DollarSign, 
      color: 'text-green-500' 
    },
    { 
      title: 'Commandes', 
      value: '156', 
      change: '+8.2%', 
      icon: ShoppingCart, 
      color: 'text-primary' 
    },
    { 
      title: 'Clients', 
      value: '89', 
      change: '+15.3%', 
      icon: Users, 
      color: 'text-blue-500' 
    },
    { 
      title: 'Produits', 
      value: products.length.toString(), 
      change: '+3', 
      icon: Package, 
      color: 'text-purple-500' 
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500/20 text-green-500 border-green-500/30">Complété</Badge>;
      case 'processing':
        return <Badge className="bg-blue-500/20 text-blue-500 border-blue-500/30">En cours</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">En attente</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'processing':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      default:
        return <XCircle className="w-4 h-4 text-red-500" />;
    }
  };

  return (
    <div className="min-h-screen py-8 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl mb-2 text-white">Tableau de Bord Admin</h1>
          <p className="text-muted-foreground">Gérez votre boutique KDR__STORE</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="bg-card border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm text-muted-foreground">{stat.title}</CardTitle>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl text-white">{stat.value}</div>
                <p className="text-xs text-green-500 mt-1">
                  <TrendingUp className="w-3 h-3 inline mr-1" />
                  {stat.change} ce mois
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-card border border-border mb-6">
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-black">
              Aperçu
            </TabsTrigger>
            <TabsTrigger value="orders" className="data-[state=active]:bg-primary data-[state=active]:text-black">
              Commandes
            </TabsTrigger>
            <TabsTrigger value="products" className="data-[state=active]:bg-primary data-[state=active]:text-black">
              Produits
            </TabsTrigger>
            <TabsTrigger value="customers" className="data-[state=active]:bg-primary data-[state=active]:text-black">
              Clients
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-white">Commandes Récentes</CardTitle>
                  <CardDescription className="text-muted-foreground">Les 5 dernières commandes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orders.slice(0, 5).map((order) => (
                      <div key={order.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(order.status)}
                          <div>
                            <p className="text-white">{order.id}</p>
                            <p className="text-sm text-muted-foreground">{order.customer}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white">{order.total} DT</p>
                          <p className="text-xs text-muted-foreground">{order.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-white">Produits Populaires</CardTitle>
                  <CardDescription className="text-muted-foreground">Top 5 des ventes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {products.filter(p => p.isBestSeller).slice(0, 5).map((product) => (
                      <div key={product.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-secondary rounded-lg" />
                          <div>
                            <p className="text-white">{product.name}</p>
                            <p className="text-sm text-muted-foreground">{product.category}</p>
                          </div>
                        </div>
                        <p className="text-primary">{product.price} DT</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Gestion des Commandes</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Liste de toutes les commandes
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input 
                        placeholder="Rechercher..." 
                        className="pl-9 bg-secondary border-border text-white w-[250px]"
                      />
                    </div>
                    <Button variant="outline" size="icon" className="border-border">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-border hover:bg-transparent">
                      <TableHead className="text-muted-foreground">Commande</TableHead>
                      <TableHead className="text-muted-foreground">Client</TableHead>
                      <TableHead className="text-muted-foreground">Date</TableHead>
                      <TableHead className="text-muted-foreground">Articles</TableHead>
                      <TableHead className="text-muted-foreground">Total</TableHead>
                      <TableHead className="text-muted-foreground">Statut</TableHead>
                      <TableHead className="text-muted-foreground text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id} className="border-border hover:bg-secondary/50">
                        <TableCell className="text-white">{order.id}</TableCell>
                        <TableCell className="text-white">{order.customer}</TableCell>
                        <TableCell className="text-muted-foreground">{order.date}</TableCell>
                        <TableCell className="text-muted-foreground">{order.items}</TableCell>
                        <TableCell className="text-primary">{order.total} DT</TableCell>
                        <TableCell>{getStatusBadge(order.status)}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-card border-border">
                              <DropdownMenuItem className="text-white hover:bg-secondary cursor-pointer">
                                <Eye className="w-4 h-4 mr-2" />
                                Voir
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-white hover:bg-secondary cursor-pointer">
                                <Edit className="w-4 h-4 mr-2" />
                                Modifier
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-500 hover:bg-secondary cursor-pointer">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Supprimer
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Gestion des Produits</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {products.length} produits au total
                    </CardDescription>
                  </div>
                  <Button className="bg-primary text-black hover:bg-primary/90 gap-2">
                    <Plus className="w-4 h-4" />
                    Ajouter un Produit
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-border hover:bg-transparent">
                      <TableHead className="text-muted-foreground">Produit</TableHead>
                      <TableHead className="text-muted-foreground">Catégorie</TableHead>
                      <TableHead className="text-muted-foreground">Prix</TableHead>
                      <TableHead className="text-muted-foreground">Stock</TableHead>
                      <TableHead className="text-muted-foreground">Statut</TableHead>
                      <TableHead className="text-muted-foreground text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.slice(0, 10).map((product) => (
                      <TableRow key={product.id} className="border-border hover:bg-secondary/50">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-secondary rounded" />
                            <span className="text-white">{product.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground capitalize">{product.category}</TableCell>
                        <TableCell className="text-primary">{product.price} DT</TableCell>
                        <TableCell className="text-muted-foreground">{product.stock}</TableCell>
                        <TableCell>
                          {product.stock > 10 ? (
                            <Badge className="bg-green-500/20 text-green-500 border-green-500/30">En stock</Badge>
                          ) : product.stock > 0 ? (
                            <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">Stock bas</Badge>
                          ) : (
                            <Badge className="bg-red-500/20 text-red-500 border-red-500/30">Rupture</Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-card border-border">
                              <DropdownMenuItem className="text-white hover:bg-secondary cursor-pointer">
                                <Eye className="w-4 h-4 mr-2" />
                                Voir
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-white hover:bg-secondary cursor-pointer">
                                <Edit className="w-4 h-4 mr-2" />
                                Modifier
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-500 hover:bg-secondary cursor-pointer">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Supprimer
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Customers Tab */}
          <TabsContent value="customers">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Gestion des Clients</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {customers.length} clients enregistrés
                    </CardDescription>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input 
                      placeholder="Rechercher un client..." 
                      className="pl-9 bg-secondary border-border text-white w-[250px]"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-border hover:bg-transparent">
                      <TableHead className="text-muted-foreground">Client</TableHead>
                      <TableHead className="text-muted-foreground">Email</TableHead>
                      <TableHead className="text-muted-foreground">Commandes</TableHead>
                      <TableHead className="text-muted-foreground">Total Dépensé</TableHead>
                      <TableHead className="text-muted-foreground">Date d'inscription</TableHead>
                      <TableHead className="text-muted-foreground text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {customers.map((customer) => (
                      <TableRow key={customer.id} className="border-border hover:bg-secondary/50">
                        <TableCell className="text-white">{customer.name}</TableCell>
                        <TableCell className="text-muted-foreground">{customer.email}</TableCell>
                        <TableCell className="text-muted-foreground">{customer.orders}</TableCell>
                        <TableCell className="text-primary">{customer.total} DT</TableCell>
                        <TableCell className="text-muted-foreground">{customer.joined}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-card border-border">
                              <DropdownMenuItem className="text-white hover:bg-secondary cursor-pointer">
                                <Eye className="w-4 h-4 mr-2" />
                                Voir le profil
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-white hover:bg-secondary cursor-pointer">
                                <Edit className="w-4 h-4 mr-2" />
                                Modifier
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
